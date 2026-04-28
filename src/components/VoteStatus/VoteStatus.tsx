import styles from './VoteStatus.module.css';
interface VoteStatusProps {
    good: number;
    neutral: number;
    bad: number;
    totalVotes: number;
    positiveRate: number;
}

export default function VoteStatus({ good, neutral, bad, totalVotes, positiveRate }: VoteStatusProps) {
//   const totalVotes = good + neutral + bad;

  return (
    <div className={styles.container}>
  <p className={styles.stat} >
    Good: <strong>{good}</strong>
  </p>
  <p className={styles.stat} >
    Neutral: <strong>{neutral}</strong>
  </p>
  <p className={styles.stat} >
    Bad: <strong>{bad}</strong>
  </p>
  <p className={styles.stat}>
    Total: <strong>{totalVotes}</strong>
  </p>
  <p className={styles.stat}>
    Positive: <strong>{positiveRate}%</strong>
  </p>
</div>
  );
}