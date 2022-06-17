import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from "@angular/core/testing";
import { UniqueIdService } from "../../services/unique-id/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

describe(`${LikeWidgetComponent.name}`, () => {

    let fixture: ComponentFixture<LikeWidgetComponent> = null;
    let component: LikeWidgetComponent = null;

    /*
        Equipe do angular não recomenda utilizar o AutoDetect,
        eles recomendam que seja utilizado o método detectChanges()
        quando necessário.
    */

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LikeWidgetModule],
            // providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent);
        component = fixture.componentInstance
    })

    it(`Should create component`, () => {
        expect(component).toBeTruthy()       
    })

    it(`Should auto-generate ID during ngOnInit when (@Input id) is not assigned`, () => {
        fixture.detectChanges();
        expect(component.id).toBeTruthy();
    })

    it(`Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned`, () => {
        const someId = new UniqueIdService().generateUniqueIdWithPrefix('someid')
        component.id = someId;
        fixture.detectChanges()
        expect(component.id).toBe(someId);
    })

    it(`#${LikeWidgetComponent.prototype.like} should trigger (@Output liked) when called`, () => {
        spyOn(component.liked, 'emit');
        fixture.detectChanges();
        component.like();
        expect(component.liked.emit).toHaveBeenCalled();
    })

})