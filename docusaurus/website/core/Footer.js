

// const React = require('react');
// const styled = require('styled-components');
// const Row = require('styled-bootstrap-grid').Row;
// const Col = require('styled-bootstrap-grid').Col;
// const media = require('styled-bootstrap-grid').media;

// const Frame = styled.div`
//   padding: 10px 10px 50px 10px;
//   ${media.xs`
//     padding: 10px 10px 50px 10px;
//   `}
//   ${media.sm`
//     padding: 50px 50px 50px 50px;
//   `}
//   ${media.md`
//     padding: 50px 50px 50px 50px;
//   `}
// `;

// const SocialLink = styled.a`
//   text-decoration: none;
//   padding: 10px;
//   color: #2A3654;
// `;

// const SocialItems = styled.div`
// margin-top: 30px;
// `;

// const Contacts = styled.p`
// color: #2A3654;
// font-weight: ${props => props.weight ? typography.weight[props.weight] : typography.weight.regular};
// font-size: ${typography.size.s4}rem;
// letter-spacing: 0.05em;
// `;
// const Address = styled.p`
// color: #2A3654;
// font-weight: ${props => props.weight ? typography.weight[props.weight] : typography.weight.regular};
// font-size: ${typography.size.s2}rem;
// letter-spacing: 0.05em;
// `;

// const Background = styled.div`
//   max-width: 950px;
//   margin: 0 auto;
// `;

// const ColItem = styled(Col)`
//   padding-top: 20px;
//   padding-bottom: 20px;
//   text-align: center;
// `;

// const icons = {
//   medium:
//     'M121.392,276.826c1.279,-12.586 -3.543,-25.002 -12.929,-33.451l-95.574,-115.2l0,-17.194l296.876,0l229.46,503.253l201.728,-503.253l283.009,0l0,17.194l-81.75,78.379c-7.04,5.377 -10.538,14.208 -9.088,22.955l0,575.915c-1.45,8.704 2.048,17.535 9.088,22.912l79.829,78.379l0,17.194l-401.578,0l0,-17.194l82.731,-80.299c8.106,-8.108 8.106,-10.497 8.106,-22.913l0,-465.493l-229.931,584.022l-31.061,0l-267.733,-584.022l0,391.424c-2.219,16.427 3.243,33.024 14.805,44.885l107.563,130.475l0,17.238l-304.981,0l0,-17.238l107.563,-130.475c11.519,-11.903 16.639,-28.586 13.867,-44.885l0,-452.608Z',
//   github:
//     'M512.062 64.032c-247.426 0-448 200.576-448 448s200.574 448 448 448c247.422 0 448-200.576 448-448s-200.578-448-448-448zM251.846 772.246c-69.506-69.508-107.784-161.918-107.784-260.214 0-98.294 38.278-190.708 107.784-260.216 69.508-69.504 161.92-107.784 260.216-107.784s190.708 38.28 260.214 107.784c69.504 69.508 107.786 161.922 107.786 260.216 0 98.296-38.282 190.708-107.786 260.214-42.852 42.848-94.41 73.806-150.684 91.27v-65.104c0-34.584-11.86-60.022-35.578-76.31 14.864-1.43 28.512-3.43 40.942-6.002 12.434-2.572 25.578-6.292 39.442-11.146s26.292-10.644 37.3-17.364c11-6.712 21.574-15.434 31.718-26.15s18.648-22.866 25.508-36.444c6.864-13.57 12.292-29.866 16.292-48.874 4.004-19.006 6-39.944 6-62.802 0-44.3-14.434-82.032-43.296-113.182 13.14-34.294 11.714-71.594-4.29-111.894l-10.718-1.286c-7.43-0.858-20.79 2.286-40.082 9.434-19.29 7.144-40.942 18.864-64.95 35.152-34.016-9.432-69.308-14.148-105.894-14.148-36.87 0-72.024 4.716-105.46 14.148-15.144-10.29-29.51-18.79-43.086-25.508s-24.436-11.29-32.582-13.718c-8.144-2.43-15.718-3.93-22.722-4.5-7-0.574-11.5-0.714-13.504-0.43-2 0.286-3.43 0.572-4.288 0.86-16.004 40.582-17.436 77.88-4.288 111.894-28.868 31.152-43.3 68.878-43.3 113.178 0 22.866 2 43.798 6.002 62.804 4 19.010 9.432 35.296 16.292 48.876s15.364 25.722 25.508 36.442c10.146 10.718 20.72 19.438 31.724 26.152s23.436 12.504 37.298 17.362c13.862 4.858 27.008 8.574 39.442 11.146 12.434 2.57 26.080 4.574 40.942 6.002-23.438 16.004-35.152 41.444-35.152 76.31v66.404c-57.936-17.198-111.030-48.638-154.966-92.572z',
//   twitter:
//     'M960 233.114c-32.946 14.616-68.41 24.5-105.598 28.942 37.954-22.762 67.098-58.774 80.856-101.688-35.52 21.054-74.894 36.368-116.726 44.598-33.542-35.724-81.316-58.038-134.204-58.038-101.496 0-183.796 82.292-183.796 183.814 0 14.424 1.628 28.45 4.758 41.89-152.75-7.668-288.22-80.872-378.876-192.072-15.822 27.15-24.898 58.706-24.898 92.42 0 63.776 32.458 120.034 81.782 153.010-30.116-0.944-58.458-9.212-83.262-22.982-0.028 0.75-0.028 1.546-0.028 2.324 0 89.070 63.356 163.334 147.438 180.256-15.426 4.186-31.664 6.426-48.442 6.426-11.836 0-23.35-1.146-34.574-3.28 23.406 73.006 91.286 126.16 171.726 127.632-62.914 49.324-142.18 78.696-228.314 78.696-14.828 0-29.448-0.876-43.842-2.568 81.33 52.138 177.96 82.574 281.786 82.574 338.11 0 523-280.104 523-523.014 0-7.986-0.164-15.914-0.542-23.778 35.952-25.96 67.124-58.318 91.756-95.162z',
// }
// const Svg = styled.svg`
//   display: inline-block;
//   vertical-align: middle;
// `;
// const Path = styled.path`
//   fill: #2A3654;
// `;

// const Icon = ({ icon, size, ...props }) => (
//   <Svg viewBox="0 0 1024 1024" width={`${size}px`} height={`${size}px`} {...props}>
//     <Path d={icons[icon]} />
//   </Svg>
// );


// const Footer = () => (
//   <Background id='contact'>
//     <Frame >
//       <Row>
//         <ColItem xm={12} sm={4} md={4}>
//           <Contacts color='primary'>hello@lowdefy.com</Contacts>
//         </ColItem>
//         <ColItem xs={12} sm={4} md={4}>
//           <img src="data:image/png;base64,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" alt="Lowdefy" width={'180px'} />
//           <SocialItems>
//             <SocialLink href="https://medium.com/lowdefy">
//               <Icon icon="medium" size={25} color="#2A3654" />
//             </SocialLink>
//             <SocialLink href="https://github.com/lowdefy">
//               <Icon icon="github" size={25} color="#2A3654" />
//             </SocialLink>
//             <SocialLink href="https://twitter.com/lowdefy">
//               <Icon icon="twitter" size={25} color="#2A3654" />
//             </SocialLink>
//           </SocialItems>
//         </ColItem>
//         <ColItem xs={12} sm={4} md={4}>
//           <Contacts color='primary'>Give. Easy. Value.</Contacts>
//         </ColItem>
//       </Row>
//       <Address color='primary'>© {new Date().getFullYear()} Lowdefy Inc. 15 Northcliff Office Park, 203 Beyers Naudé Drive, Johannesburg, South Africa</Address>
//     </Frame>
//   </Background>
// );

// // <div>
// //   <LinkItem to='/technology'>Our Technology Explained</LinkItem>
// // </div>
// // <div>
// //   <LinkItem to='/partners'>Partner With Us</LinkItem>
// // </div>
// // <div>
// //   <LinkItem to='/careers'>Careers</LinkItem>
// // </div>


// module.exports = Footer;

const React = require('react');

class Footer extends React.Component {
  render() {
    return null;
  }
}

module.exports = Footer;