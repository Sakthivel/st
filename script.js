/**
 * Main JavaScript file for website functionality
 * Handles login button interaction and other dynamic features
 */

(function() {
    'use strict';

    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        initializeApp();
    });

    /**
     * Initialize application
     */
    function initializeApp() {
        setupLoginButton();
        setupAccessibility();
    }

    /**
     * Setup login button event handler
     */
    function setupLoginButton() {
        const loginBtn = document.getElementById('loginBtn');
        
        if (!loginBtn) {
            console.error('Login button not found');
            return;
        }

        loginBtn.addEventListener('click', handleLogin);
        
        // Add keyboard support
        loginBtn.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleLogin();
            }
        });
    }

    /**
     * Handle login button click
     */
    function handleLogin() {
        // Prevent XSS by using textContent instead of innerHTML
        const message = 'Login functionality will be implemented here.\nThis is a placeholder for authentication.';
        alert(message);
        
        // In a real application, you would:
        // 1. Show a login modal/form
        // 2. Validate user input
        // 3. Send credentials to server securely (HTTPS)
        // 4. Handle authentication response
        // 5. Redirect or update UI based on login status
        
        console.log('Login button clicked');
    }

    /**
     * Setup accessibility features
     */
    function setupAccessibility() {
        // Add skip to main content link for keyboard users
        addSkipLink();
        
        // Ensure focus is visible for keyboard navigation
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', function() {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    /**
     * Add skip to main content link for accessibility
     */
    function addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        
        // Add styles for skip link
        const style = document.createElement('style');
        style.textContent = `
            .skip-link {
                position: absolute;
                top: -40px;
                left: 0;
                background: #2563eb;
                color: white;
                padding: 0.5rem 1rem;
                text-decoration: none;
                z-index: 1000;
            }
            .skip-link:focus {
                top: 0;
            }
            body.keyboard-navigation *:focus {
                outline: 2px solid #2563eb;
                outline-offset: 2px;
            }
        `;
        
        document.head.appendChild(style);
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add id to main content
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.id = 'main-content';
            mainContent.setAttribute('tabindex', '-1');
        }
    }

    /**
     * Sanitize user input to prevent XSS
     * @param {string} input - User input to sanitize
     * @returns {string} Sanitized string
     */
    function sanitizeInput(input) {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    }

    // Export functions for testing if needed
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            sanitizeInput,
            handleLogin
        };
    }
})();