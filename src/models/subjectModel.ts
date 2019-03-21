import axios, { AxiosResponse } from 'axios';
import { postReview } from '@/endpoints';

export default class Subject {
  private subject: string;
  private user: string;
  private review: string;
  private approved: boolean = false;
  private voteCount: number = 0;

  constructor(subject: string, user: string, review: string) {
    this.subject = subject;
    this.user = user;
    this.review = review;
  }
  public getJSON(): any {
    const requestDetails = {
      subject: this.subject,
      user: this.user,
      review: this.review,
      approved: this.approved,
      voteCount: this.voteCount,
    };

    return requestDetails;
  }

  public postCreateReview(): void {
    axios.post(postReview, this.getJSON()).catch((e) => {
      console.log(e);
    });
  }
}
