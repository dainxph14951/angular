import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsDetailComponent } from './pages/products-detail/products-detail/products-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './pages/home/home/home.component';
import { NodeFoundComponent } from './pages/node-found/node-found/node-found.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadersComponent } from './pages/headers/headers.component';
import { HeaderComponent } from './components/header/header.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FooterComponent } from './pages/footer/footer.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { AddProductsComponent } from './components/products/add-products/add-products.component';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NewsComponent } from './pages/news/news.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzFormModule } from 'ng-zorro-antd/form';
// registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsDetailComponent,
    HomeComponent,
    NodeFoundComponent,
    HeadersComponent,
    HeaderComponent,
    FooterComponent,
    ListProductsComponent,
    AddProductsComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzMenuModule,
    NzImageModule,
    NzCardModule,
    NzListModule,
    NzTypographyModule,
    NzButtonModule,
    NzTransferModule,
    NzFormModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
