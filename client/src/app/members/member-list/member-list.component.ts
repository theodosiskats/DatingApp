import {Component} from '@angular/core';
import {Member} from "../../_models/member";
import {MembersService} from "../../_services/members.service";
import {Pagination} from "../../_models/pagination";
import {AccountService} from "../../_services/account.service";
import {UserParams} from "../../_models/userParams";
import {User} from "../../_models/user";
import {take} from "rxjs";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent {
  members: Member[] = []
  pagination: Pagination | undefined
  userParams: UserParams | undefined
  user: User | undefined
  //TODO - Add default value and fetch both man and women
  genderList = [
    {value: 'male', display: 'Males'},
    {value: 'female', display: 'Females'}
  ]

  constructor(private memberService: MembersService, private accountService: AccountService) {
      this.accountService.currentUser$.pipe(take(1)).subscribe({
        next: user => {
          if (user) {
            this.userParams = new UserParams(user)
            this.user = user
          }
        }
      })
  }

  ngOnInit(): void {
    this.loadMembers()
  }

  loadMembers() {
    if (!this.userParams) return
    this.memberService.getMembers(this.userParams).subscribe({
      next: response => {
        if (response.result && response.pagination) {
          this.members = response.result;
          this.pagination = response.pagination;
        }
      }
    })
  }

  resetFilters() {
    if (this.user) {
      this.userParams = new UserParams(this.user)
      this.loadMembers()
    }
  }

  pageChanges(event: any) {
    if (this.userParams && this.userParams?.pageNumber !== event.page) {
      this.userParams.pageNumber = event.page
      this.loadMembers();
    }
  }
}
