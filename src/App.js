import LoginPage from "./LoginPage";
import PopCat from "./PopCat";
import UseCard from "./UserCard";
function App() {
  return (
    <div>
      <UseCard
      name="alaa shaaban"
      email="alaa.shaaban943@gmail.com"
      age={22}
      id="1"
      />
      <PopCat/>
      <LoginPage/>
    </div>
  );
}

export default App;
