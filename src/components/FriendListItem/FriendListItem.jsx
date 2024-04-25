import css from './FriendListItem.module.css';

export default function FriendListItem ({ avatar, name, isOnline }) {
      return (
        <div className={css.friendListItem}>
          <img
            className={css.friendListItem_avatar}
            src={avatar}
            alt={name}
            width="48"
          />
          <p className={css.friendListItem_name}>{name}</p>
      
          <p className={isOnline ? css.online : css.offline}>
                {isOnline ? "Online" : "Offline"}
        </p>
        </div>
      )
    }