function ProjectsList({ items }) {
  const listItems = items.map((item, index) => (
    <img key={index} src={item.img} />
  ));

  return <div className="container">{listItems}</div>;
}

export default ProjectsList;
