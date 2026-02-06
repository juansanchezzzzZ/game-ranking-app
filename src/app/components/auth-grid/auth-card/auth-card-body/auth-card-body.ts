import { Component } from '@angular/core';
import { CardHeader } from './card-header/card-header';
import { CardBody } from './card-body/card-body';
import { CardFooter } from './card-footer/card-footer';

@Component({
  selector: 'app-auth-card-body',
  standalone: true,
  imports: [CardHeader, CardBody, CardFooter],
  templateUrl: './auth-card-body.html',
  styleUrl: './auth-card-body.css',
})
export class AuthCardBody {}
