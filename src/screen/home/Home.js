import { Button, Space } from "antd";
import "./home.css";
const Home = () => {
  const imagePath = `${process.env.PUBLIC_URL}/students.png`;
  return (
    <div className="home-style">
      <div
        style={{
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "10px", // For better text wrapping on small screens
        }}
      >
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Welcome </div>
        <div style={{ fontSize: "1rem", marginTop: "20px" }}>
          We are thrilled to announce our new initiative, focused on enhancing
          health education and promoting wellness within our learning
          environment. Our goal is to empower students with the knowledge and
          skills necessary to lead healthy and balanced lives. This program
          includes interactive workshops, informative sessions, and engaging
          activities designed to educate and inspire. Stay tuned for more
          updates and get ready to embark on this exciting journey towards
          better health and learning. Sincerely,
        </div>
        <Space style={{ marginTop: "20px" }}>
          <Button style={{ width: "150px", height: "40px" }} danger>
            {" "}
            About us
          </Button>
          <Button style={{ width: "150px", height: "40px" }} type="primary">
            Contact us
          </Button>
        </Space>
      </div>
      <div>
        <img
          style={{ height: "500px", width: "500px" }}
          src={imagePath}
          alt="students"
        />
      </div>
    </div>
  );
};
export default Home;
