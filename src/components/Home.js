import Notes from "./Notes";

const Home = (props) => {

    return (
        <>
            <div className="container my-3">
                <Notes alert={props.alert} />
            </div>
        </>
    )
};

export default Home;

