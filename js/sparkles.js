const canvas = document.getElementById("sparkle-canvas");
const ctx = canvas.getContext("2d");

// Set the canvas width and height to the entire browser page, not just the viewport
function resizeCanvas() {
    canvas.width = document.documentElement.scrollWidth;
    canvas.height = document.documentElement.scrollHeight;
}

// Resize initially
resizeCanvas();
window.addEventListener("resize", resizeCanvas); // Resize again when window changes

// Initailize list of sparkles
const sparkles = [];
const sparkleCount = 50; // Number of sparkles
const sparkleSize = 30; // Size of the sparkle

function getCurrentThemeColor() {
    const theme = getComputedStyle(document.body);
    return theme.getPropertyValue("--color-text").trim();
}

// Create random sparkle objects that fit in the left and right margins
function createSparkle() {
    const x = Math.random() < 0.5
        ? Math.random() * (canvas.width * 0.22) // Left margin
        : canvas.width - Math.random() * (canvas.width * 0.22); // Right margin
    const y = Math.random() * canvas.height;
    return {
        x,
        y,
        opacity: 0,
        fadeIn: true, // Whether it's fading in or out
        speed: Math.random() * 0.01 + 0.005, // Speed of fading
    };
}

// Draw a single sparkle (pixelated cross)
function drawSparkle(sparkle) {
    const { x, y, opacity } = sparkle;
    const segmentSize = sparkleSize * 0.3; // Size of each segment
    const gap = sparkleSize * 0.1; // Gap between the segments
    ctx.globalAlpha = opacity;
    ctx.fillStyle = getCurrentThemeColor();

    // // Draw horizontal segments
    // ctx.fillRect(x - segmentSize - gap, y - 1, segmentSize, 2); // Left
    // ctx.fillRect(x + gap, y - 1, segmentSize, 2); // Right

    // // Draw vertical segments
    // ctx.fillRect(x - 1, y - segmentSize - gap, 2, segmentSize); // Top
    // ctx.fillRect(x - 1, y + gap, 2, segmentSize); // Bottom

    ctx.font = `${sparkleSize}px Arial`; // Font size and style
    // ctx.fillText("₊", x, y); // Draw sparkle as a star
    ctx.fillText("+", x, y);

    ctx.globalAlpha = 1.0; // Reset global alpha
}

// Update sparkle opacity and regenerate if fully faded out
function updateSparkle(sparkle) {
    if (sparkle.fadeIn) {
        sparkle.opacity += sparkle.speed;
        if (sparkle.opacity >= 1) {
            sparkle.fadeIn = false;
        }
    } else {
        sparkle.opacity -= sparkle.speed;
        if (sparkle.opacity <= 0) {
            // Reset sparkle
            Object.assign(sparkle, createSparkle());
        }
    }
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sparkles.forEach((sparkle) => {
        updateSparkle(sparkle);
        drawSparkle(sparkle);
    });
    requestAnimationFrame(animate);
}

// Initialize sparkles
for (let i = 0; i < sparkleCount; i++) {
    sparkles.push(createSparkle());
}

animate();