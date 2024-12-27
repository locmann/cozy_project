import './styles.scss';

export const Loader = () => {
  return (
    <div className={'page-loader'}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
