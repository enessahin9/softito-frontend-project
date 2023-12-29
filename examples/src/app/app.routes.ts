import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PostComponent } from '../components/post/post.component';
import { UserComponent } from '../components/user/user.component';
import { TransferComponent } from '../components/transfer/transfer.component';
import { CardComponent } from '../components/card/card.component';
import { UserCardDetailComponent } from '../components/user/user-card-detail/user-card-detail.component';
import { CardDetailComponent } from '../components/card/card-detail/card-detail.component';
import { TransferDetailComponent } from '../components/transfer/transfer-detail/transfer-detail.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "page1", component: Page1Component },
    { path: "page2", component: Page2Component },
    { path: "posts", component: PostComponent },
    { path: "users", component: UserComponent },
    { path: "users/cards/:userId", component: UserCardDetailComponent },
    { path: "cards", component: CardComponent },
    { path: "cards/:id", component: CardDetailComponent },
    { path: "transfers", component: TransferComponent },
    { path: "transfers/:id", component: TransferDetailComponent },

];

