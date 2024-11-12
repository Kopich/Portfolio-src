const Skill = ({ src, altText = "Skill icon" }) => (
  <div className="my-3">
    <div className="card shadow-sm border-0 rounded-3">
      <div className="d-flex justify-content-center align-items-center p-4">
        <img
          src={src}
          alt={altText}
          className="card-img-top"
          style={{ width: "80px", objectFit: "contain" }}
        />
      </div>
      <div className="card-body text-center">
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>
);

export default Skill;
