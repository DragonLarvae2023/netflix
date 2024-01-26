import Logo from "../Logo.png"
import LogoNetflix from "../utils/Logo"
function Header() {
  return (
    <>
      <div className="absolute w-24 h-9  z-10 m-8 ">
        <LogoNetflix />
      </div>
    </>
  );
}
export default Header