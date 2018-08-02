import { NgModule, ModuleWithProviders } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RatingComponent } from "./rating/rating.component";
import { RadioComponent } from "./radio/radio.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShoppingCartService } from "../restaurant-detail/shopping-cart/shoping-cart.service";
import { RestaurantsService } from "../restaurants/restaurants.service";
import { OrderService } from "../order/order.service";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from "./messages/notification.service";

@NgModule({
    
    declarations: [InputComponent, RatingComponent, RadioComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports:[RatingComponent, RadioComponent, InputComponent, CommonModule, FormsModule, ReactiveFormsModule,SnackbarComponent ]
})
export class SharedModule{
    static forRoot():ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers:[ShoppingCartService, RestaurantsService, OrderService, NotificationService]
        }
    }
}