import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './root/header/header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RootComponent, HeaderComponent],
})
export class AppModule {}
