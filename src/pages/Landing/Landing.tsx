import React from 'react';
import Title from '../../components/Title/Title';
import Footer from '../../components/Footer/Footer';
import Video from '../../components/Video/Video';
import Header from '../../components/Header/Header';
import Download from '../../components/Download/Download';
import Feature from '../../components/Feature/Feature';
import { IFeatureConfig } from '../../typings/d';
import './landing.css';

interface IState {
  activeFeatureId: number;
  forceExpand: boolean;
  showFullPage: boolean;
}

export default class Landing extends React.Component<{}, IState> {
  /**
   * 
   */
  protected config: IFeatureConfig[];

  /**
   * Landing constructor
   * @param props - component properties
   */
  constructor(props: {}) {
    super(props);

    this.state = {
      activeFeatureId: 0,
      forceExpand: window.screen.width < 415,
      showFullPage: window.screen.width >= 530,
    };

    this.config = [
      {
        icon: '🎨',
        title: 'Customisable',
        description: 'Switch is customisable, future updates will give room for even more custom features and settings',
      },
      {
        icon: '🌚',
        title: 'Dark Mode',
        description: 'Built with Dark Mode in mind to avoid strain on your eyes after long hours of screen use.',
      },
      {
        icon: '🔔',
        title: 'Notifications',
        description: 'All the notifications from your applications are re-directed right through switch onto your desktop.',
      },
      {
        icon: '🍻',
        title: 'Overlay Mode',
        description: 'Switch is shown on top of other applications saving you time from switching screens (optional).',
      },
      {
        icon: '💻',
        title: 'Cross Platform',
        description: 'The platform is built using tools that allow the application to run on all major operating systems.',
      },
      {
        icon: '🙋🏽‍♀️',
        title: 'Feedback',
        description: 'Everyone has the chance to report bugs and recommend features that are then implemented into Switch.',
      },
      {
        icon: '🙉',
        title: 'Jeeeeeez!',
        description: 'Switch will work with most web applications, you can choose from our suggested apps or just add your own.',
      },
    ];

    // scope binding
    this.handleFeatureClicked = this.handleFeatureClicked.bind(this);
  }

  /**
   * Component mounting
   */
  public componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        forceExpand: window.screen.width < 415,
        showFullPage: window.screen.width >= 530,
      });
    });
  }

  /**
   * Handles feature clicked
   * @param id - feature id
   */
  protected handleFeatureClicked(id: number) {
    this.setState({ activeFeatureId: id });
  }

  render() {
    return (
      <div>
        {this.state.showFullPage && <Header />}
        <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
          <Title />

          <h3 className="primary text-center mt-5">Simple browser overlay on your screen</h3>
          <div className="d-flex flex-row">
            <h5 className="primary text-center">Switch to&nbsp;</h5>
            <h5 className="secondary"> S</h5>
            <h5 className="primary">w</h5>
            <h5 className="primary">i</h5>
            <h5 className="primary">t</h5>
            <h5 className="tertiary">c</h5>
            <h5 className="quaternary">h</h5>
          </div>
          <span className="text-muted download-description">currently in beta</span>

          <div className="landing-feature-container mt-3">
            {this.state.showFullPage && <Video />}

            <div className={`d-flex flex-row row overflow-auto mt-4 ${this.state.showFullPage ? '' : 'justify-content-center'}`}>  
              {this.config.map((v, i) => (
                <Feature
                  {...v}
                  id={i}
                  key={`feature-${i}`}
                  show={this.state.forceExpand || this.state.activeFeatureId === i}
                  handleClick={this.handleFeatureClicked}
                />
              ))}
            </div>
          </div>

          <div className="d-flex flex-row row overflow-auto justify-content-center mt-5">
            <Download disabled os="Windows" description="available soon" />
            <Download os="macOS" description="currently in beta" />
          </div>

          <div className="w-100 mt-5">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}