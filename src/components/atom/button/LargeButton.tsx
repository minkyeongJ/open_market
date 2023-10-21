import styles from "./LargeButton.module.css";

interface Props {
  name?: string;
  backgroundColor?: string;
  color?: string;
}

const LargeButton = ({
  name = "버튼",
  backgroundColor = "#21BF48",
  color = "white",
}: Props) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: color,
      }}
      className={styles.outerButton}
    >
      <p className={styles.innerButton}>{name}</p>
    </div>
  );
};

export default LargeButton;
