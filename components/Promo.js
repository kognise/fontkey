export default (props) => (
  <div {...props}>
    <iframe
      frameBorder='0' allowFullScreen='' scrolling='no'
      src='https://player.vimeo.com/video/342162889?title=0&byline=0&portrait=0'
    />

    <style jsx>{`
      div {
        padding-top: 56.25%;
        position: relative;
        overflow: hidden;
        margin-bottom: 32px;
      }

      iframe {
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0px;
        top: 0px;
        border-radius: 10px;
      }
    `}</style>
  </div>
)