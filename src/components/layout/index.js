import './layout.scss';
import React from 'react';
import { Menu, Icon,  Breadcrumb, Badge} from 'antd';
const _height = document.body.clientHeight;
class LayoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(info) {
    this.context.router.push(`/${info.key}`);
  }

  render() {
    return (
      <div className="layout">
        <section className="layout-left">
          <header>
            <img
              style={{ width: "100%" }}
              src="http://7xr8fr.com1.z0.glb.clouddn.com/logo.png"/>
          </header>
            <Menu
              theme="dark"
              style={{ width: 240 }}
              mode="vertical"
              onClick={this.handleClick}
            >
              <Menu.Item key="resource">
                <Icon type="mail" />
                资源管理
              </Menu.Item>
              <Menu.Item key="category">
                <Icon type="mail" />
                分类管理
              </Menu.Item>
              <Menu.Item key="article">
                <Icon type="mail" />
                技术文章
              </Menu.Item>
              <Menu.Item key="system">
                <Icon type="mail" />
                系统设置
              </Menu.Item>
            </Menu>
        </section>
        <section className="layout-right" style={{minHeight: _height}}>
          <div className="layout-header">
              <div className="layout-header-label">博客管理后台</div>
              <div className="layout-header-user">
                <ul>
                  <li>
                    <a className="layout-list-item">
                    <Icon type="bars" />
                    </a>
                  </li>
                  <li><a className="layout-list-item"><Icon type="mail" /></a></li>
                  <li><a className="layout-list-item"><Icon type="notification"/></a></li>
                </ul>
              </div>
          </div>
          <div className="layout-body">
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
}

LayoutComponent.contextTypes = {
  router: React.PropTypes.object
};

export default LayoutComponent;
