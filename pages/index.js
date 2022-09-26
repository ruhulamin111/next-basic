import Meta from "../components/Meta";

const Index = ({ itemList }) => {

  return (
    <>
      {/* <Meta title="Basic next" keywords="basic, next" description="amy beng " /> */}

      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, et.</h2>

      <main className="container mt-4">
        <div className="row">
          {itemList.slice(0, 16).map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <button className="btn btn-primary" >Details</button>
            </div>
          ))}

        </div>
      </main>
    </>
  );
};


export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const itemList = await res.json();

  return {
    props: {
      itemList
    }
  }
}



export default Index;