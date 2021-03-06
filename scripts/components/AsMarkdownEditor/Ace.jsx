import React from 'react';

export default class Ace extends React.Component {
    constructor() {
        super();
    }
    componentDidMount = () => {
        let editor = ace.edit(React.findDOMNode(this));
        let maxScrollTop = 0;
        editor.setTheme('ace/theme/tomorrow');
        let session = editor.getSession();
        session.setMode('ace/mode/markdown');
        session.on('change', () => {
            this.props.onChange(editor.getValue());
        });
        session.on('changeScrollTop', (scrollTop) => {
            this.props.onScroll(scrollTop / maxScrollTop);
        });
        session.setUseWrapMode(true);
        editor.renderer.on('afterRender', () => {
            let renderer = editor.renderer;
            maxScrollTop = Math.max(0, renderer.layerConfig.maxHeight - renderer.$size.scrollerHeight + renderer.scrollMargin.bottom);
        });
        editor.container.style.fontSize = '16px';
        editor.setValue(this.props.content);
    }
    render = () => {
        return (
            <div className="ace"></div>
        );
    }
} 