import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vote } from '../../services/books.service';
import { User } from '../../models/User';

export interface VoteResult {
  count: number;
  percent: number;
  users: string;
}

@Component({
  selector: 'app-voting-block',
  templateUrl: './voting-block.component.html',
  styleUrls: ['./voting-block.component.scss']
})
export class VotingBlockComponent {

  public votesFor: VoteResult;
  public votesAgainst: VoteResult;
  public currentUserVote: Vote;
  public userVoted: boolean;
  private votesCount: number;

  @Input()
  public currentUser: User;

  @Input()
  public set votes(votesList: Vote[]) {
    this.votesCount = votesList.length;
    this.votesFor = this.getVoteResults(votesList, true);
    this.votesAgainst = this.getVoteResults(votesList, false);
    this.currentUserVote = votesList.find(({userId}) => this.currentUser && this.currentUser.id === userId);
  }

  @Output()
  public onVote = new EventEmitter<boolean>();

  public vote(position: boolean): void {
    this.userVoted = true;
    this.onVote.emit(position);
  }

  private getVoteResults(list: Vote[], filterPosition: boolean): VoteResult {
    const votes = list.filter(({position}) => position === filterPosition);
    return {
      count: votes.length,
      percent: Math.round(votes.length / this.votesCount * 100),
      users: votes.map(({nickName}) => nickName).join(', ')
    };
  }

}
