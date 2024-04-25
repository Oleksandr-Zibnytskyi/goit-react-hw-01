import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
    return (
    <div className={css.profile_container}>
    <div className={css.profile_container_up}>
      <img className={css.profile_img} src={image} alt={name} />

      <p className={css.profile_name}>{name}</p>
      <p className={css.profile_tag}>{tag}</p>
      <p className={css.profile_location}>{location}</p>
    </div>
  
    <ul className={css.profile_list}>
      <li className={css.profile_item}>

        <span className={css.profile_item_title}>Followers</span>
        <span className={css.profile_item_value}>{stats.followers}</span>

      </li>
      <li className={css.profile_item}>

        <span className={css.profile_item_title}>Views</span>
        <span className={css.profile_item_value}>{stats.views}</span>

      </li>
      <li className={css.profile_item}>

        <span className={css.profile_item_title}>Likes</span>
        <span className={css.profile_item_value}>{stats.likes}</span>

      </li>
    </ul>
  </div>
    );
}