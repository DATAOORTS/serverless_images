<style>
@keyframes slideIn {
    from { right: -380px; opacity: 0; }
    to { right: 20px; opacity: 1; }
}

@keyframes slideOut {
    from { right: 20px; opacity: 1; }
    to { right: -380px; opacity: 0; }
}

@keyframes borderGlow {
    0% {
        background-position: 0% 50%;
        filter: hue-rotate(0deg) brightness(1.2);
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
        filter: hue-rotate(360deg) brightness(1.2);
    }
}

.genai-bar {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: -380px;
    width: 320px;
    padding: 25px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    overflow: hidden;
}

.genai-bar::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 20px;
    background: linear-gradient(
        45deg,
        #ff0000,
        #ff7300,
        #fffb00,
        #48ff00,
        #00ffd5,
        #002bff,
        #7a00ff,
        #ff00c8,
        #ff0000
    );
    background-size: 200% 200%;
    animation: borderGlow 4s linear infinite;
    z-index: -1;
}

.genai-bar::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    border-radius: 16px;
    background: #ffffff;
    z-index: -1;
}

.genai-bar.show {
    animation: slideIn 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.genai-bar.hide {
    animation: slideOut 0.5s forwards;
}

.genai-content {
    position: relative;
    color: #000000;
    z-index: 2;
}

.close-btn {
    position: absolute;
    top: 15px;
    right: -5px;
    background: rgba(0, 0, 0, 0.05);
    border: none;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    outline: none;
    z-index: 3;
}

.close-btn:hover {
    background: rgba(0, 0, 0, 0.1);
    transform: rotate(90deg);
}

.genai-title {
    font-size: 0.9em;
    margin: 0 0 15px 0;
    font-weight: 700;
    color: #000;
    line-height: 1.4;
    padding-right: 30px;
}

.genai-description {
    font-size: 0.85em;
    line-height: 1.5;
    margin-bottom: 20px;
    color: rgba(0, 0, 0, 0.8);
}

.genai-button {
    display: inline-block;
    padding: 10px 25px;
    background: #000;
    color: #fff !important;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-size: 0.9em;
    font-weight: 500;
    position: relative;
    overflow: hidden;
}

.genai-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
}
</style>

<!-- First Notification with a close button -->
<div id="genai-bar-1" class="genai-bar" style="display: none;">
    <div class="genai-content">
        <button class="close-btn" onclick="closeBar('genai-bar-1')">&times;</button>
        <h4 class="genai-title">Request to build your GenAI Based Apps & APIs</h4>
        <p class="genai-description">
            Dataoorts GenAI Innovative builds cutting-edge, specialized GenAI apps and APIs for individuals, startups, and enterprises. Leveraging deep expertise in generative AI and serverless computing, we deliver scalable, cost-effective, and high-performance GenAI-based apps and APIs that seamlessly integrate with your business.
        </p>
        <a href="https://tally.so/r/3XzV6L" class="genai-button" target="_blank">Get Started</a>
    </div>
</div>

<!-- Second Notification (already had a close button) -->
<div id="genai-bar-2" class="genai-bar" style="display: none;">
    <div class="genai-content">
        <button class="close-btn" onclick="closeBar('genai-bar-2')">&times;</button>
        <h4 class="genai-title">Dataoorts AI: The Most Affordable Serverless Cloud</h4>
        <p class="genai-description">
            Dataoorts Serverless Cloud offers API access to leading open-source AI models—including advanced reasoning LLMs—at most affordable token pricing, with high concurrency rate and rapid token generation. Get started today!
        </p>
        <a href="https://dataoorts.com/ai" class="genai-button" target="_self">Serverless Cloud</a>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const bar1 = document.getElementById('genai-bar-1');
    const bar2 = document.getElementById('genai-bar-2');

    // Show the first notification after 2 seconds.
    setTimeout(() => {
        bar1.style.display = 'block';
        bar1.classList.add('show');
    }, 2000);

    // Hide the first notification after it has been visible for 7 seconds.
    setTimeout(() => {
        bar1.classList.remove('show');
        bar1.classList.add('hide');
    }, 2000 + 7000); // Total delay of 9 seconds from page load

    // Once the first notification finishes sliding out, hide it and show the second notification.
    bar1.addEventListener('animationend', (e) => {
        if (e.animationName === 'slideOut') {
            bar1.style.display = 'none';
            
            // Show the second notification immediately.
            bar2.style.display = 'block';
            bar2.classList.add('show');
            
            // Auto-hide the second notification after 7 seconds.
            setTimeout(() => {
                bar2.classList.remove('show');
                bar2.classList.add('hide');
            }, 7000);
        }
    });

    // After the second notification finishes sliding out, hide it completely.
    bar2.addEventListener('animationend', (e) => {
        if (e.animationName === 'slideOut') {
            bar2.style.display = 'none';
        }
    });
});

// Function to manually close a notification.
function closeBar(id) {
    const bar = document.getElementById(id);
    bar.classList.remove('show');
    bar.classList.add('hide');
    bar.addEventListener('animationend', () => {
        bar.style.display = 'none';
    });
}
</script>
