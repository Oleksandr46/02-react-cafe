export interface Votes {
    good: number;
    neutral: number;
    bad: number;
    totalVotes: number;
    positiveRate: number;
}

export type VoteType = 'good' | 'neutral' | 'bad';
