import { useEffect, useRef } from "react";
import "./AeroShards.css";

interface AeroShardsProps {
    backgroundColor?: string;
    shardColor?: string;
    accentColor?: string;
    placement?: "full";
    flow?: "stream";
    material?: "pearl";
}

const AeroShards = ({
    backgroundColor = "#120F17",
    shardColor = "#896ABD",
    accentColor = "#A855F7",
}: AeroShardsProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        };

        resizeCanvas();

        window.addEventListener("resize", resizeCanvas);

        const shards = [
            {
                x: 0.15,
                y: 0.2,
                size: 120,
                speed: 0.0005,
            },
            {
                x: 0.7,
                y: 0.3,
                size: 160,
                speed: -0.0004,
            },
            {
                x: 0.45,
                y: 0.75,
                size: 130,
                speed: 0.0003,
            },
        ];

        let animationId: number;

        const animate = (time: number) => {
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            shards.forEach((shard, index) => {
                const x =
                    shard.x * canvas.width +
                    Math.sin(time * shard.speed + index) * 50;

                const y =
                    shard.y * canvas.height +
                    Math.cos(time * shard.speed + index) * 30;

                ctx.save();

                ctx.translate(x, y);

                ctx.rotate(time * shard.speed);

                const gradient = ctx.createLinearGradient(
                    -shard.size,
                    -shard.size,
                    shard.size,
                    shard.size
                );

                gradient.addColorStop(0, shardColor);
                gradient.addColorStop(1, accentColor);

                ctx.fillStyle = gradient;

                ctx.globalAlpha = 0.25;

                ctx.beginPath();

                ctx.moveTo(0, -shard.size);
                ctx.lineTo(shard.size * 0.7, shard.size * 0.6);
                ctx.lineTo(-shard.size * 0.7, shard.size * 0.6);

                ctx.closePath();

                ctx.fill();

                ctx.restore();
            });

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [backgroundColor, shardColor, accentColor]);

    return (
        <div
            className="aero-shards"
            style={{ backgroundColor }}
            data-ready="true"
        >
            <canvas
                ref={canvasRef}
                className="aero-shards__canvas"
            />
        </div>
    );
};

export default AeroShards;