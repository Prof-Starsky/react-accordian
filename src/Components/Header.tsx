interface Props {
  children: string;
}

const Header = ({ children }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{children}</h1>
    </div>
  );
};

export default Header;
