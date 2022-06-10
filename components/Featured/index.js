import style from "./style.module.css";

export default function Featured() {
  const itemFeatured = [
    {
      id: 1,
      image: "application.png",
      title: "Apply",
      text: "Applying for our services after showing interest is easy. Just click on the sign-up button to register with us. You can also register at our office at Tema Comm 1, First floor inside Harriman Plaza.",
    },
    {
      id: 2,
      image: "verification.png",
      title: "Verification",
      text: "We do this by verifying the reliability of the information provided by the client on the application. In less than 72 hours after applying, the verification process is complete.",
    },
    {
      id: 3,
      image: "acceptance.png",
      title: "Acceptance",
      text: "Once the application is filed, management will notify you of the progress of your application.",
    },
    {
      id: 4,
      image: "payment.png",
      title: "Payment",
      text: "With EasyRent, you can choose to pay by year,  semi-annual, quarter or month, the latter being particularly helpful for tenants.",
    },
    // {
    //   id: 5,
    //   image: "Settings.svg",
    //   title: "Earum porro qui",
    //   text: "Vel officia dolores ut iusto mollitia velit quis. Ex repudiandae nemo. Omnis ut fuga recusandae. Natus eos inventore. Nesciunt quo asperiores ut quas non molestias vero. Autem ab ducimus.",
    // },
    // {
    //   id: 6,
    //   image: "Power-button.svg",
    //   title: "Et placeat amet",
    //   text: "Sint et nihil blanditiis dolorem quod. Quo nostrum cum sequi non consequatur dolores sit. Dolorum optio minus voluptatem dolores et placeat voluptatem necessitatibus est.",
    // },
  ];

  return (
    <div className={style.featured} id="featured">
      <h3>- Process</h3>
      {itemFeatured.map((item) => (
        <div className={style.box_featured} key={item.id}>
          <img src={`/img/${item.image}`} width={40} height={40}/>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
