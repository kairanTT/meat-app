import { HomeComponent } from "./home/home.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { NotFoundComponent } from "./not-found/not-found.component";
export var ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ] },
    { path: 'order-summary', component: OrderSummaryComponent },
    { path: 'order', loadChildren: './order/order.module#OrderModule' },
    { path: '**', component: NotFoundComponent }
];
//# sourceMappingURL=app.routes.js.map