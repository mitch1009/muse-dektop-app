import { Injectable } from '@angular/core';
import {Apollo, gql, QueryRef} from 'apollo-angular';
import {EmptyObject} from 'apollo-angular/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apollo: Apollo) { }

  /* User Data*/
  GetData(): QueryRef<any, EmptyObject>{
    return this.apollo.watchQuery({query: gql`{
        realMess{
          message
          success
        }
      }`, pollInterval: 500 });
}
}
