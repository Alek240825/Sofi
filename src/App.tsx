"use client"

import { useState, useEffect } from "react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"
import { Heart, X, ArrowRight, Sparkles, Star, FlowerIcon } from "lucide-react"
import confetti from "canvas-confetti"

export default function App() {
  const [name, setName] = useState("")
  const [stage, setStage] = useState(0)
  const [noCount, setNoCount] = useState(0)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [showHearts, setShowHearts] = useState(false)
  const [accepted, setAccepted] = useState(false)

  // Función para mover el botón "No" cuando el cursor se acerca
  const handleNoButtonHover = () => {
    const newX = Math.random() * 300 - 150
    const newY = Math.random() * 300 - 150
    setNoButtonPosition({ x: newX, y: newY })
    setNoCount(noCount + 1)
  }

  // Función para lanzar confeti cuando acepta
  const handleYesClick = () => {
    setAccepted(true)

    // Confeti con colores femeninos
    confetti({
      particleCount: 150,
      spread: 180,
      origin: { y: 0.6 },
      colors: ["#ffb6c1", "#ffc0cb", "#f8bbd0", "#e1bee7", "#d1c4e9"],
    })

    // Lanzar más confeti cada 1 segundo por 5 segundos
    let count = 0
    const interval = setInterval(() => {
      confetti({
        particleCount: 150,
        spread: 180,
        origin: { y: 0.6 },
        colors: ["#ffb6c1", "#ffc0cb", "#f8bbd0", "#e1bee7", "#d1c4e9"],
      })
      count++
      if (count >= 5) clearInterval(interval)
    }, 1000)
  }

  // Efecto para mostrar corazones flotantes
  useEffect(() => {
    if (stage >= 1) {
      setShowHearts(true)
    }
  }, [stage])

  // Establecer el nombre como "Sofia" por defecto
  useEffect(() => {
    setName("Sofia")
  }, [])

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-lavender-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Elementos decorativos */}
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-pink-200 animate-pulse">
          <FlowerIcon size={30} />
        </div>
        <div className="absolute top-20 right-20 text-purple-200 animate-pulse" style={{ animationDelay: "0.5s" }}>
          <FlowerIcon size={24} />
        </div>
        <div className="absolute bottom-20 left-20 text-pink-200 animate-pulse" style={{ animationDelay: "1s" }}>
          <FlowerIcon size={28} />
        </div>
        <div className="absolute bottom-10 right-10 text-purple-200 animate-pulse" style={{ animationDelay: "1.5s" }}>
          <FlowerIcon size={26} />
        </div>
      </div>

      {/* Corazones flotantes de fondo */}
      {showHearts && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-pink-300 opacity-70 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 30 + 10}px`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
              size={Math.random() * 30 + 20}
              fill="#f8bbd0"
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <Star
              key={i + 100}
              className="absolute text-purple-200 opacity-70 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
              size={Math.random() * 20 + 10}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <Sparkles
              key={i + 200}
              className="absolute text-purple-300 opacity-70 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
              size={Math.random() * 20 + 10}
            />
          ))}
        </div>
      )}

      {stage === 0 && (
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-xl border-pink-200 rounded-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-pink-500">Hola Sofia</CardTitle>
            <CardDescription className="text-purple-500">Tengo algo muy especial que decirte...</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-2">
            <Button
              className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white shadow-md transition-all duration-300 transform hover:scale-105"
              onClick={() => setStage(1)}
            >
              Continuar <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
          <CardFooter className="flex justify-center pt-0">
            <div className="flex items-center justify-center">
              <Heart className="h-4 w-4 text-pink-400 mr-1" fill="#f8bbd0" />
              <span className="text-xs text-pink-400">Hecho con amor para ti</span>
              <Heart className="h-4 w-4 text-pink-400 ml-1" fill="#f8bbd0" />
            </div>
          </CardFooter>
        </Card>
      )}

      {stage === 1 && (
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-xl border-pink-200 rounded-2xl animate-fade-in">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-pink-500">Sofia, mi princesa</CardTitle>
            <CardDescription className="text-purple-500">Cada día me maravillas más...</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg mb-4 text-gray-700">
              Tu sonrisa ilumina mi mundo y tu presencia hace que cada momento sea especial.
            </p>
            <div className="flex justify-center my-4">
              <Heart className="h-8 w-8 text-pink-400 animate-pulse" fill="#f8bbd0" />
            </div>
            <Button
              className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white shadow-md transition-all duration-300 transform hover:scale-105"
              onClick={() => setStage(2)}
            >
              Continuar <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      )}

      {stage === 2 && !accepted && (
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-xl border-pink-200 rounded-2xl animate-fade-in">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-pink-500 mb-4">Sofia...</CardTitle>
            <div className="flex justify-center mb-4">
              <Heart className="h-10 w-10 text-pink-400 animate-pulse" fill="#f8bbd0" />
            </div>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-6">
              ¿Quieres ser mi novia?
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-6">
            <div className="flex justify-center gap-4">
              <Button
                className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-6 text-xl shadow-md transition-all duration-300 transform hover:scale-105 rounded-xl"
                onClick={handleYesClick}
              >
                ¡Sí! <Heart className="ml-2 h-5 w-5 fill-current" />
              </Button>

              <Button
                variant="outline"
                className="relative px-8 py-6 text-xl border-pink-300 text-pink-500 hover:text-pink-600 rounded-xl"
                style={{
                  transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                  transition: "transform 0.3s ease-out",
                }}
                onMouseEnter={handleNoButtonHover}
                onClick={handleNoButtonHover}
              >
                No <X className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {noCount > 0 && (
              <p className="text-pink-500 italic mt-4 text-center">
                {noCount === 1
                  ? "¿Estás segura, princesa?"
                  : noCount === 2
                    ? "Tus ojos dicen que sí..."
                    : noCount === 3
                      ? "Nuestros corazones ya lo saben..."
                      : noCount === 4
                        ? "El botón sabe que quieres decir que sí..."
                        : "El universo conspira para que estemos juntos, Sofia 💖"}
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {accepted && (
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-xl border-pink-200 rounded-2xl animate-fade-in">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              ¡Sofia, mi amor! ❤️
            </CardTitle>
            <CardDescription className="text-xl text-purple-500">
              Has hecho que sea la persona más feliz del mundo
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="h-40 flex items-center justify-center">
              <div className="relative">
                <Heart className="h-32 w-32 text-pink-400 animate-pulse" fill="#f8bbd0" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white font-bold text-xl">S + A</p>
                </div>
              </div>
            </div>
            <p className="text-lg mt-4 text-gray-700">Prometo cuidar de tu corazón cada día.</p>
            <p className="text-lg mt-2 font-semibold text-pink-500">Te quiero con toda mi alma, Sofia.</p>
            <div className="flex justify-center gap-2 mt-4">
              <Heart className="h-6 w-6 text-pink-400" fill="#f8bbd0" />
              <Heart className="h-6 w-6 text-pink-500" fill="#f47fb5" />
              <Heart className="h-6 w-6 text-purple-400" fill="#d1c4e9" />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
