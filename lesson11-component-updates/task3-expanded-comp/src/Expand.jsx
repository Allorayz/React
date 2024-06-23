import React from 'react';

class Expand extends React.Component {
  state = {
    isOpen: false,
  };

  toggleContent = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { title, children } = this.props;
    const { isOpen } = this.state;
    const arrowContent = isOpen ? (
      <i className="fas fa-chevron-down"></i>
    ) : (
      <i className="fas fa-chevron-up"></i>
    );

    return (
      <div className={'expand border'}>
        <div className={'expand__header'}>
          <span className={'expand__title'}>{title}</span>
          <button onClick={this.toggleContent} className={'expand__toggle-btn'}>
            {arrowContent}
          </button>
        </div>
        {isOpen && <div className="expand__content">{children}</div>}
      </div>
    );
  }
}

export default Expand;
