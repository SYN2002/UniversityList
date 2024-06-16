import React from 'react';

function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white py-4 mt-auto">
            <div className="container mx-auto flex justify-between items-center">
                <p className="text-sm">&copy; 2024 University List Generator</p>
                <div >
                    <a href="#" className="text-gray-300 hover:text-white mx-2">About</a>
                    <a href="#" className="text-gray-300 hover:text-white mx-2">Contact</a>
                    <a href="#" className="text-gray-300 hover:text-white mx-2">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
