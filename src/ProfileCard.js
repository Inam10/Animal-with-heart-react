function PorfileCard({ title, handle, image, descripton }) {
  //   const title = props.title;
  //   const handle = props.handle;
  //   const { title, handle } = props;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="images is-1by1">
          <img src={image} alt="logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{descripton}</div>
      </div>
    </div>
  );
}

export default PorfileCard;
