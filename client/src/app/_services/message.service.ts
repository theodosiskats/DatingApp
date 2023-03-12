import { Injectable } from '@angular/core';
import {env} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {getPaginatedResult, getPaginationHeaders} from "./paginationsHelper";
import {Message} from "../_models/message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseUrl = env.apiUrl

  constructor(private http: HttpClient) { }

  getMessages(pageNumber: number, pageSize: number, container: string)
  {
    let params = getPaginationHeaders(pageNumber, pageSize)
    params = params.append('Container', container)
    return getPaginatedResult<Message[]>(this.baseUrl + 'messages', params, this.http)
  }

  getMessageThread(username: string) {
    return this.http.get<Message[]>(this.baseUrl + 'messages/thread/' + username)
  }
}
