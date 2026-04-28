import css from "./Notification.module.css"
interface NotificationProps {
    message: string;
}
export default function Notification({ message }: NotificationProps) {
  return (
    <div><p className={css.message}>{message}</p>
</div>
  );
}