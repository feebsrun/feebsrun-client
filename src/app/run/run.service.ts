import { Injectable } from '@angular/core';
import { Run } from '../models/run.model';
import { EntityService } from '../entity.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RunService extends EntityService<Run> {
  constructor(protected http: HttpClient){
    super(http, 'runs');
  }
}
