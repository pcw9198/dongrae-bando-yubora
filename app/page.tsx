"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Phone,
  MapPin,
  Car,
  GraduationCap,
  ShoppingBag,
  Building2,
  Users,
  Calendar,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndexB, setCurrentImageIndexB] = useState(0)
  const [isModalOpenB, setIsModalOpenB] = useState(false)
  const [isOverviewOpen, setIsOverviewOpen] = useState(false)
  const FEATURE_MOBILE_CAROUSEL = process.env.NEXT_PUBLIC_FEATURE_MOBILE_CAROUSEL === "true"

  const unitAImages = [
    { src: "/84a-living-room.png", title: "거실", description: "넓고 밝은 거실 공간" },
    { src: "/84a-bedroom.png", title: "침실", description: "편안한 휴식 공간" },
    { src: "/84a-kitchen.png", title: "주방", description: "모던한 주방 및 식당" },
    { src: "/84a-bathroom-updated.png", title: "욕실", description: "깔끔한 욕실 공간" },
  ]

  const unitBImages = [
    { src: "/84b-living-room.png", title: "거실", description: "넓고 밝은 거실 공간" },
    { src: "/84b-bedroom.png", title: "침실", description: "편안한 휴식 공간" },
    { src: "/84b-kitchen.png", title: "주방", description: "모던한 주방 및 식당" },
    { src: "/84b-bathroom.png", title: "욕실", description: "깔끔한 욕실 공간" },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % unitAImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + unitAImages.length) % unitAImages.length)
  }

  const nextImageB = () => {
    setCurrentImageIndexB((prev) => (prev + 1) % unitBImages.length)
  }

  const prevImageB = () => {
    setCurrentImageIndexB((prev) => (prev - 1 + unitBImages.length) % unitBImages.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold">동래 반도 유보라</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#overview" className="hover:text-accent transition-colors">
              단지개요
            </a>
            <a href="#units" className="hover:text-accent transition-colors">
              세대정보
            </a>
            <a href="#location" className="hover:text-accent transition-colors">
              입지환경
            </a>
            <a href="#consultation" className="hover:text-accent transition-colors">
              분양상담
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button 
              className="hidden sm:flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors cursor-pointer"
              onClick={() => window.open("tel:010-8979-9198")}
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold">010-8979-9198</span>
            </button>
            <Button
              variant="secondary"
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => window.open("tel:010-8979-9198")}
            >
              <Phone className="h-4 w-4 mr-2" />
              전화상담
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-primary/90 to-primary/70 flex items-center justify-center text-center text-primary-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/dongrae-yubora-hero-image.png')`,
          }}
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-4 py-2">프리미엄 분양</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">동래 반도 유보라</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            <br />
            최고의 입지와 품질을 자랑합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4"
              onClick={() => window.open("https://naver.me/xWzI9WyE", "_blank")}
            >
              <Calendar className="h-5 w-5 mr-2" />
              방문 상담 신청
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-4 bg-transparent"
              onClick={() => window.open("tel:010-8979-9198")}
            >
              <Phone className="h-5 w-5 mr-2" />
              전화 상담 연결
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">단지 개요</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              , 최고의 교통 접근성과 생활 편의시설을 자랑합니다.
            </p>
          </div>

          <div className="md:hidden space-y-4 mb-8">
            {FEATURE_MOBILE_CAROUSEL ? (
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4">
                <div className="snap-center shrink-0 min-w-[78%] rounded-xl border bg-card p-4">
                  <div className="text-xs text-muted-foreground">총 세대수</div>
                  <div className="text-lg font-bold">400세대</div>
                </div>
                <div className="snap-center shrink-0 min-w-[78%] rounded-xl border bg-card p-4">
                  <div className="text-xs text-muted-foreground">세대 타입</div>
                  <div className="text-lg font-bold">84㎡A,B,C</div>
                </div>
                <div className="snap-center shrink-0 min-w-[78%] rounded-xl border bg-card p-4">
                  <div className="text-xs text-muted-foreground">주차 대수</div>
                  <div className="text-lg font-bold">498대</div>
                </div>
                <div className="snap-center shrink-0 min-w-[78%] rounded-xl border bg-card p-4">
                  <div className="text-xs text-muted-foreground">입주 예정</div>
                  <div className="text-lg font-bold">2026년 11월 예정</div>
                </div>
                <div className="snap-center shrink-0 min-w-[78%] rounded-xl border bg-card p-4">
                  <div className="text-xs text-muted-foreground">건축규모</div>
                  <div className="text-lg font-bold">지하3층~지상42층</div>
                </div>
                <div className="snap-center shrink-0 min-w-[78%] rounded-xl border bg-card p-4">
                  <div className="text-xs text-muted-foreground">대지면적</div>
                  <div className="text-lg font-bold">9,906.40㎡</div>
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border bg-card p-3 text-center">
                    <div className="text-xs text-muted-foreground">총 세대수</div>
                    <div className="text-base font-semibold">400세대</div>
                  </div>
                  <div className="rounded-lg border bg-card p-3 text-center">
                    <div className="text-xs text-muted-foreground">세대 타입</div>
                    <div className="text-base font-semibold">84㎡A,B,C</div>
                  </div>
                  <div className="rounded-lg border bg-card p-3 text-center">
                    <div className="text-xs text-muted-foreground">주차 대수</div>
                    <div className="text-base font-semibold">498대</div>
                  </div>
                  <div className="rounded-lg border bg-card p-3 text-center">
                    <div className="text-xs text-muted-foreground">입주 예정</div>
                    <div className="text-base font-semibold">2026년 11월 예정</div>
                  </div>
                  <div className="rounded-lg border bg-card p-3 text-center">
                    <div className="text-xs text-muted-foreground">건축규모</div>
                    <div className="text-base font-semibold">지하3층~지상42층</div>
                  </div>
                  <div className="rounded-lg border bg-card p-3 text-center">
                    <div className="text-xs text-muted-foreground">대지면적</div>
                    <div className="text-base font-semibold">9,906.40㎡</div>
                  </div>
                </div>
                <div className="text-center">
                  <Button size="sm" className="mt-2" onClick={() => setIsOverviewOpen((v) => !v)}>
                    세부 정보 보기
                  </Button>
                </div>
              </>
            )}
          </div>

          <div className={`mb-12 ${isOverviewOpen ? "block" : "hidden"} md:block`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Building2 className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">총 세대수</h3>
                <p className="text-2xl font-bold text-primary">400세대</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">세대 타입</h3>
                <p className="text-2xl font-bold text-primary">84㎡A,B,C</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Car className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">주차 대수</h3>
                <p className="text-2xl font-bold text-primary">498대</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">입주 예정</h3>
                <p className="text-2xl font-bold text-primary">2026년 11월 예정</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Building2 className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">건축규모</h3>
                <p className="text-2xl font-bold text-primary">지하3층~지상42층</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">대지면적</h3>
                <p className="text-2xl font-bold text-primary">9,906.40㎡</p>
              </CardContent>
            </Card>
            </div>
          </div>

          <Card className="p-8 bg-card">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 text-center">사업 개요</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-muted-foreground">사업명:</span>
                    <span>부산광역시 동래구 낙민동 공동주택 신축공사</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-muted-foreground">대지위치:</span>
                    <span>부산광역시 동래구 낙민동 76-1번지 일원</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-muted-foreground">대지면적:</span>
                    <span>9,906.40㎡ (2,996.69py)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-muted-foreground">연면적:</span>
                    <span>67,987.35㎡</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-muted-foreground">세대정보:</span>
                    <span>총 400세대</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-muted-foreground">건축규모:</span>
                    <span>지하 3층 ~ 지상 42층, 3개동</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-muted-foreground">타입:</span>
                    <span>84㎡A, 84㎡B, 84㎡C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-muted-foreground">용적률/건폐율:</span>
                    <span>475.25% / 27.63%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Units Section */}
      <section id="units" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">세대 정보</h2>
            <p className="text-lg text-muted-foreground">다양한 평형대로 구성된 프리미엄 주거 공간</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="aspect-video bg-muted relative">
                <img src="/floor-plan-84a.png" alt="84㎡A 평면도" className="w-full h-full object-cover" />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">인기</Badge>
              </div>
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1"></div>
                <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">84㎡A</h3>
                <p className="text-muted-foreground mb-4">신혼부부 및 소가족을 위한 최적의 공간 설계</p>
                </div>
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent hover:bg-accent hover:text-accent-foreground"
                      onClick={() => {
                        setCurrentImageIndex(0)
                        setIsModalOpen(true)
                      }}
                    >
                      상세보기
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                    <DialogHeader className="p-6 pb-0">
                      <DialogTitle className="text-2xl font-bold">84㎡A 상세보기</DialogTitle>
                    </DialogHeader>
                    <div className="relative flex-1 flex items-center justify-center p-6">
                      <div className="relative w-full h-full max-h-[60vh]">
                        <img
                          src={unitAImages[currentImageIndex].src || "/placeholder.svg"}
                          alt={unitAImages[currentImageIndex].title}
                          className="w-full h-full object-contain rounded-lg"
                        />

                        {/* Navigation buttons */}
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                          onClick={prevImage}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>

                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                          onClick={nextImage}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Image info and indicators */}
                    <div className="p-6 pt-0">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold mb-2">{unitAImages[currentImageIndex].title}</h3>
                        <p className="text-muted-foreground">{unitAImages[currentImageIndex].description}</p>
                      </div>

                      <div className="flex justify-center space-x-2">
                        {unitAImages.map((_, index) => (
                          <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                              index === currentImageIndex
                                ? "bg-primary scale-110"
                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                            aria-label={`${unitAImages[index].title} 이미지로 이동`}
                          />
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="overflow-hidden flex flex-col h-full">
              <div className="aspect-video bg-muted relative">
                <img src="/floor-plan-84b.png" alt="84㎡B 평면도" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1"></div>
                <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">84㎡B</h3>
                <p className="text-muted-foreground mb-4">효율적인 공간 활용과 채광을 고려한 설계</p>
                </div>
                <Dialog open={isModalOpenB} onOpenChange={setIsModalOpenB}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent hover:bg-accent hover:text-accent-foreground"
                      onClick={() => {
                        setCurrentImageIndexB(0)
                        setIsModalOpenB(true)
                      }}
                    >
                      상세보기
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                    <DialogHeader className="p-6 pb-0">
                      <DialogTitle className="text-2xl font-bold">84㎡B 상세보기</DialogTitle>
                    </DialogHeader>
                    <div className="relative flex-1 flex items-center justify-center p-6">
                      <div className="relative w-full h-full max-h-[60vh]">
                        <img
                          src={unitBImages[currentImageIndexB].src || "/placeholder.svg"}
                          alt={unitBImages[currentImageIndexB].title}
                          className="w-full h-full object-contain rounded-lg"
                        />

                        {/* Navigation buttons */}
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                          onClick={prevImageB}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>

                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                          onClick={nextImageB}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Image info and indicators */}
                    <div className="p-6 pt-0">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold mb-2">{unitBImages[currentImageIndexB].title}</h3>
                        <p className="text-muted-foreground">{unitBImages[currentImageIndexB].description}</p>
                      </div>

                      <div className="flex justify-center space-x-2">
                        {unitBImages.map((_, index) => (
                          <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                              index === currentImageIndexB
                                ? "bg-primary scale-110"
                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                            }`}
                            onClick={() => setCurrentImageIndexB(index)}
                            aria-label={`${unitBImages[index].title} 이미지로 이동`}
                          />
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="overflow-hidden flex flex-col h-full">
              <div className="aspect-video bg-muted relative">
                <img src="/floor-plan-84c.png" alt="84㎡C 평면도" className="w-full h-full object-cover" />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">프리미엄</Badge>
              </div>
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1"></div>
                <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">84㎡C</h3>
                <p className="text-muted-foreground mb-4">프리미엄 마감재와 특화 설계가 적용된 타입</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent hover:bg-accent hover:text-accent-foreground"
                    >
                  상세보기
                </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                    <DialogHeader className="p-6 pb-0">
                      <DialogTitle className="text-2xl font-bold">84㎡C 상세보기</DialogTitle>
                    </DialogHeader>
                    <div className="relative flex-1 flex items-center justify-center p-6">
                      <div className="relative w-full h-full max-h-[60vh]">
                        <img
                          src="/floor-plan-84c.png"
                          alt="84㎡C 평면도"
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold mb-2">84㎡C 프리미엄 타입</h3>
                        <p className="text-muted-foreground">프리미엄 마감재와 특화 설계가 적용된 최고급 타입</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">입지 환경</h2>
            <p className="text-lg text-muted-foreground">동래구 중심가의 최적 입지 조건</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="p-6">
                  <CardContent className="pt-6">
                    <Car className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-semibold mb-2">교통</h3>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <div className="font-semibold text-foreground mb-2">지하철 1·4호선, 동해선 트리플 역세권</div>
                      <ul className="space-y-1">
                        <li>• 지하철 1호선 교대역 도보 약17분</li>
                        <li>• 지하철 4호선 낙민역 도보 약7분</li>
                        <li>• 지하철 동해선 동래역 도보 약3분</li>
                        <li>• 만덕-센텀 대심도 26년 개통예정</li>
                    </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="pt-6">
                    <GraduationCap className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-semibold mb-2">교육</h3>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <div className="font-semibold text-foreground mb-2">단지 앞 초,고교 근거리 도보권 위치</div>
                      <ul className="space-y-1">
                        <li>• 낙민초 도보 5분</li>
                        <li>• 동래고 도보 12분</li>
                        <li>• 동래구 교육 문화특구 지정</li>
                    </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="pt-6">
                    <MapPin className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-semibold mb-2">편의</h3>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <div className="font-semibold text-foreground mb-2">온천천, 수민어울공원 힐링 라이프</div>
                      <ul className="space-y-1">
                        <li>• 온천천 수변공원 도보 3분</li>
                        <li>• 수민어울공원 도보 3분</li>
                        <li>• 어린이 복합문화공간 들락날락 도보3분</li>
                    </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="pt-6">
                    <Building2 className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-semibold mb-2">비전</h3>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <div className="font-semibold text-foreground mb-2">대규모 개발 비전의 중심</div>
                      <ul className="space-y-1">
                        <li>• 사업지 인근 총 9,211세대 재건축과 정비사업 등 다양한 개발호재</li>
                        <li>• 동래구 임시청사 부지에 건립되는 생활복합센터(27년 예정)</li>
                        <li>• 수민어울공원 2단계 체육센터 조성(29년 예정)</li>
                    </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6">
              <img
                src="/dongrae-location-updated-map.png"
                alt="동래구 위치도"
                className="w-full h-80 object-contain rounded-lg mb-4"
              />
              <div className="text-center">
                <h3 className="font-semibold mb-2">동래구 중심가 프리미엄 입지</h3>
                <p className="text-sm text-muted-foreground">
                  지하철역, 학교, 쇼핑몰이 모두 도보권 내 위치한 최적의 생활 환경
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="container mx-auto px-4">
          <img src="/location-benefits-section.png" alt="동래 반도 유보라 입지환경 혜택" className="w-full h-auto" />
        </div>
      </section>

      <section className="py-0">
        <div className="container mx-auto px-4">
          <img
            src="/premium-lifestyle-section.png"
            alt="동래 반도 유보라 프리미엄 라이프스타일"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">분양 상담 신청</h2>
            <p className="text-lg mb-8 opacity-90">전문 상담사가 자세한 분양 정보와 혜택을 안내해드립니다</p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <Card className="bg-card/10 border-accent/30 text-center p-6">
                <CardContent className="pt-6">
                  <Phone className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-primary-foreground">전화 상담</h3>
                  <p className="text-primary-foreground/80 mb-4">즉시 전문 상담사와 연결</p>
                  <Button
                    className="bg-accent text-accent-foreground hover:bg-accent/90 w-full"
                    onClick={() => window.open("tel:010-8979-9198")}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    010-8979-9198
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/10 border-accent/30 text-center p-6">
                <CardContent className="pt-6">
                  <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-primary-foreground">방문 상담</h3>
                  <p className="text-primary-foreground/80 mb-4">모델하우스 견학 및 상담</p>
                  <Button
                    className="bg-accent text-accent-foreground hover:bg-accent/90 w-full"
                    onClick={() => window.open("https://naver.me/xWzI9WyE", "_blank")}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    예약하기
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm opacity-80">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-accent mr-1" />
                <span>무료 상담</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-accent mr-1" />
                <span>전문 컨설팅</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-accent mr-1" />
                <span>맞춤 분양 혜택</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6 text-accent" />
                <span className="text-lg font-bold">동래 반도 유보라</span>
              </div>
              <p className="text-muted-foreground text-sm">
                부산광역시 동래구 프리미엄 아파트 분양
                <br />
                최고의 입지와 품질을 자랑합니다
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">연락처</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>010-8979-9198</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>부산광역시 동래구 낙민동 76-1번지 일원</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">운영시간</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>평일/주말/공휴일: 09:00 - 17:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 동래 반도 유보라. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
