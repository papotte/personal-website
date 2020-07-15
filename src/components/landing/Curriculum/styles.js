import overlayIllustration from 'assets/illustrations/overlay.svg'
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }

  .all-page-container {
    margin: 0 auto;
    height: 100%;
    max-height: 600px;
    overflow: auto;
  }

  /* For pdf */
  .react-pdf__Page {
    margin-top: 0px;
  }

  .react-pdf__Page__annotations.annotationLayer {
    padding: 0px;
  }

  .react-pdf__Page__canvas {
    margin: 0 auto;
  }
`
