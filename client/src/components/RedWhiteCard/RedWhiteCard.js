import React from 'react';
import './RedWhiteCard.css'

const RedWhiteCard = () => {
    return (
        <div id="red-white-container">
            <div className="red-white-card">
                <div className="face face1">
                    <div className="content">
                        <svg id="card-image-1" height="80" width="100" fill="#fff" viewBox="0 0 511.998 511"  xmlns="http://www.w3.org/2000/svg"><path d="M58.96 187.047a7.472 7.472 0 005.298 2.195 7.495 7.495 0 005.3-12.793l-18.195-18.195 18.196-18.191a7.495 7.495 0 00-10.598-10.598l-23.492 23.492a7.493 7.493 0 000 10.598zm0 0M133.32 158.254l-18.195 18.195a7.491 7.491 0 00.004 10.598c1.46 1.46 3.379 2.195 5.297 2.195s3.836-.734 5.297-2.195l23.496-23.496a7.49 7.49 0 000-10.594l-23.496-23.496a7.49 7.49 0 00-10.594 0 7.488 7.488 0 000 10.598zm0 0M81.172 188.723c.898.351 1.828.52 2.738.52a7.498 7.498 0 006.977-4.755l18.457-46.988a7.492 7.492 0 10-13.945-5.48l-18.462 46.988c-1.511 3.851.383 8.203 4.235 9.715zm0 0M45.008 233.203h50.48a7.494 7.494 0 000-14.988h-50.48a7.491 7.491 0 00-7.492 7.492 7.492 7.492 0 007.492 7.496zm0 0M211.754 218.215h-88.75a7.494 7.494 0 000 14.988h88.75a7.495 7.495 0 100-14.988zm0 0M45.008 264.809h21.504a7.494 7.494 0 000-14.989H45.008a7.491 7.491 0 00-7.492 7.493 7.492 7.492 0 007.492 7.496zm0 0M184.34 249.82a7.491 7.491 0 00-7.492 7.493 7.492 7.492 0 007.492 7.496h13.094a7.495 7.495 0 100-14.989zm0 0M164.617 257.313a7.494 7.494 0 00-7.492-7.493h-64.32a7.491 7.491 0 00-7.493 7.493 7.492 7.492 0 007.493 7.496h64.32a7.494 7.494 0 007.492-7.496zm0 0M213.703 257.313a7.494 7.494 0 007.492 7.496h24.528a7.495 7.495 0 100-14.989h-24.528a7.494 7.494 0 00-7.492 7.493zm0 0M172.895 164.266h25.87a7.495 7.495 0 100-14.989h-25.87a7.494 7.494 0 100 14.989zm0 0M227.742 164.266h157.856a7.492 7.492 0 007.492-7.496 7.491 7.491 0 00-7.492-7.493H227.742a7.494 7.494 0 100 14.989zm0 0M361.621 182.246h-63.945a7.494 7.494 0 000 14.988h63.945a7.494 7.494 0 000-14.988zm0 0M273.7 182.246h-21.981a7.492 7.492 0 00-7.492 7.496 7.491 7.491 0 007.492 7.492h21.98a7.491 7.491 0 007.492-7.492 7.492 7.492 0 00-7.492-7.496zm0 0M172.895 197.234h53.847a7.494 7.494 0 000-14.988h-53.847a7.495 7.495 0 100 14.988zm0 0M157.219 281.16h-50.477a7.494 7.494 0 00-7.496 7.492 7.494 7.494 0 007.496 7.493h50.477a7.494 7.494 0 007.492-7.493 7.494 7.494 0 00-7.492-7.492zm0 0M83.79 281.16H45.007a7.491 7.491 0 00-7.492 7.492 7.491 7.491 0 007.492 7.493h38.781a7.491 7.491 0 007.492-7.493 7.491 7.491 0 00-7.492-7.492zm0 0M248.723 281.16H182.78a7.491 7.491 0 00-7.492 7.492 7.491 7.491 0 007.492 7.493h65.942a7.494 7.494 0 007.492-7.493 7.494 7.494 0 00-7.492-7.492zm0 0M337.898 242.668H301.84a7.494 7.494 0 000 14.988h36.058a7.492 7.492 0 007.493-7.496 7.491 7.491 0 00-7.493-7.492zm0 0M400.469 257.656h50.902a7.495 7.495 0 100-14.988H400.47a7.491 7.491 0 00-7.492 7.492 7.494 7.494 0 007.492 7.496zm0 0M375.016 242.668h-11.664a7.494 7.494 0 100 14.988h11.664a7.492 7.492 0 007.492-7.496 7.491 7.491 0 00-7.492-7.492zm0 0M301.84 339.313h36.058a7.489 7.489 0 007.493-7.493 7.491 7.491 0 00-7.493-7.492H301.84a7.494 7.494 0 00-7.492 7.492 7.491 7.491 0 007.492 7.493zm0 0M400.469 339.313h50.902a7.492 7.492 0 100-14.985H400.47a7.491 7.491 0 00-7.492 7.492 7.491 7.491 0 007.492 7.493zm0 0M363.352 339.313h11.664a7.492 7.492 0 100-14.985h-11.664a7.491 7.491 0 00-7.493 7.492 7.489 7.489 0 007.493 7.493zm0 0M337.898 405.988H301.84c-4.137 0-7.492 3.356-7.492 7.492s3.355 7.493 7.492 7.493h36.058c4.141 0 7.493-3.356 7.493-7.493s-3.352-7.492-7.493-7.492zm0 0M451.371 405.988H400.47c-4.14 0-7.492 3.356-7.492 7.492s3.351 7.493 7.492 7.493h50.902c4.14 0 7.496-3.356 7.496-7.493s-3.355-7.492-7.496-7.492zm0 0M375.016 405.988h-11.664c-4.141 0-7.497 3.356-7.497 7.492s3.356 7.493 7.497 7.493h11.664c4.14 0 7.492-3.356 7.492-7.493s-3.352-7.492-7.492-7.492zm0 0"/><path d="M479.023.5H32.98C14.797.5 0 15.293 0 33.48v362.567c0 18.183 14.797 32.976 32.98 32.976h28.2a7.491 7.491 0 007.492-7.492 7.494 7.494 0 00-7.492-7.492h-28.2c-9.921 0-17.992-8.07-17.992-17.992V367.62h272.996v12.914h-5.941c-8.129 0-14.738 6.61-14.738 14.738v18.766H106.738a7.494 7.494 0 00-7.492 7.492 7.491 7.491 0 007.492 7.492h72.047v26.875H156.16c-15.094 0-27.37 12.282-27.37 27.372v16.187c0 6.887 5.6 12.488 12.487 12.488h228.875c6.887 0 12.489-5.601 12.489-12.488V483.27c0-15.09-12.278-27.372-27.371-27.372h-22.625v-9.472h138.527c8.125 0 14.734-6.61 14.734-14.739v-3.527c14.606-3.39 25.524-16.496 25.524-32.113l.566-362.57C512 15.293 497.207.5 479.023.5zm-196.73 349.281v-35.918h188.629v35.918zm20.676-50.906v-15.766h147.273v15.766zm147.273 65.89v15.77H302.97v-15.77zM193.77 429.024h73.535v2.668c0 8.125 6.61 14.735 14.738 14.735h35.617v9.472H193.77zm161.503 41.864c6.829 0 12.383 5.554 12.383 12.383v13.69H143.773v-13.69c0-6.829 5.559-12.383 12.387-12.383zm115.649-39.45H282.293v-35.914h188.629zm25.523-35.39c0 7.258-4.328 13.512-10.535 16.351V395.27c0-8.125-6.613-14.735-14.738-14.735h-5.942v-12.914h31.215zm0-43.41h-10.78c.151-.848.245-39.024.245-39.024 0-8.129-6.613-14.738-14.738-14.738h-5.942v-15.766h5.942c8.125 0 14.738-6.613 14.738-14.738v-36.418c0-8.125-6.613-14.738-14.738-14.738h-42.324a7.492 7.492 0 00-7.493 7.496 7.491 7.491 0 007.493 7.492h42.074v35.918H282.293v-35.918h99.93a7.491 7.491 0 007.492-7.492 7.492 7.492 0 00-7.492-7.496h-100.18c-8.129 0-14.738 6.613-14.738 14.738v36.418c0 8.125 6.61 14.738 14.738 14.738h5.941v15.766h-5.941c-8.129 0-14.738 6.613-14.738 14.738 0 0 .093 38.176.246 39.024H14.988V102.43h481.457zm0-265.196H15.54V33.477c0-9.918 8.07-17.989 17.992-17.989h444.922c9.922 0 17.992 8.07 17.992 17.992zm0 0"/><path d="M55.262 29.262c-12.125 0-21.989 9.863-21.989 21.988s9.864 21.992 21.989 21.992 21.992-9.867 21.992-21.992-9.867-21.988-21.992-21.988zm0 28.992c-3.86 0-7.004-3.14-7.004-7.004 0-3.86 3.144-7.004 7.004-7.004 3.863 0 7.004 3.145 7.004 7.004a7.01 7.01 0 01-7.004 7.004zm0 0M111.25 29.262c-12.125 0-21.992 9.863-21.992 21.988s9.867 21.992 21.992 21.992 21.988-9.867 21.988-21.992-9.867-21.988-21.988-21.988zm0 28.992a7.01 7.01 0 01-7.004-7.004c0-3.86 3.14-7.004 7.004-7.004 3.86 0 7.004 3.145 7.004 7.004 0 3.863-3.145 7.004-7.004 7.004zm0 0M167.234 29.262c-12.125 0-21.988 9.863-21.988 21.988s9.863 21.992 21.988 21.992 21.993-9.867 21.993-21.992-9.868-21.988-21.993-21.988zm0 28.992c-3.859 0-7.004-3.14-7.004-7.004 0-3.86 3.145-7.004 7.004-7.004 3.864 0 7.004 3.145 7.004 7.004a7.01 7.01 0 01-7.004 7.004zm0 0"/></svg>
                        <h3>Code</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>Sunt excepteur proident consectetur et enim. Incididunt cupidatat tempor eu in mollit Lorem eu duis anim nostrud amet reprehenderit. Laborum nisi elit consequat ut occaecat anim laborum mollit elit ad velit.</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RedWhiteCard;