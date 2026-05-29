import React from "react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { Textarea } from "../components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "../components/ui/dialog";
import {
    Truck,
    MapPin,
    ArrowRight,
    Trash2,
    CheckCircle2
} from "lucide-react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";

export function Checkout() {

    const {
        items: cartItems,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice: subtotal
    } = useCart();

    const [deliveryMethod, setDeliveryMethod] = useState("nova-post");
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
    const deliveryPrice = deliveryMethod === "courier" ? 150 : 80;
    const total = subtotal + deliveryPrice;
    const isCartEmpty = cartItems.length === 0;

    const handleConfirmOrder = () => {
        setIsOrderConfirmed(true);
    };

    const handleCloseModal = () => {
        clearCart();
        setIsOrderConfirmed(false);
    };

    return (
        <div className="min-h-screen py-16 px-6">
            <div className="container mx-auto max-w-7xl">

                <div className="mb-12">
                    <h1 className="text-5xl md:text-7xl mb-4 text-white">
                        Оформлення замовлення
                    </h1>
                    <p className="text-xl text-slate-300">
                        Заповніть форму для завершення покупки
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2 space-y-6">

                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                            <div className="flex items-center gap-3 mb-6">
                                <MapPin className="h-6 w-6 text-white" />
                                <h2 className="text-3xl text-white">Контактні дані</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input placeholder="Ім'я" className="bg-white/10 text-white" />
                                <Input placeholder="Прізвище" className="bg-white/10 text-white" />
                                <Input placeholder="Email" className="bg-white/10 text-white" />
                                <Input placeholder="Телефон" className="bg-white/10 text-white" />
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                            <div className="flex items-center gap-3 mb-6">
                                <Truck className="h-6 w-6 text-white" />
                                <h2 className="text-3xl text-white">Доставка</h2>
                            </div>

                            <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>

                                <Label className="flex items-center justify-between p-4 border border-white/20 rounded-2xl cursor-pointer">
                                    <RadioGroupItem value="nova-post" />
                                    <span className="text-white">Нова Пошта</span>
                                    <span className="text-white">80 ₴</span>
                                </Label>

                                <Label className="flex items-center justify-between p-4 border border-white/20 rounded-2xl cursor-pointer">
                                    <RadioGroupItem value="ukr-post" />
                                    <span className="text-white">Укрпошта</span>
                                    <span className="text-white">80 ₴</span>
                                </Label>

                                <Label className="flex items-center justify-between p-4 border border-white/20 rounded-2xl cursor-pointer">
                                    <RadioGroupItem value="courier" />
                                    <span className="text-white">Кур'єр</span>
                                    <span className="text-white">150 ₴</span>
                                </Label>

                            </RadioGroup>
                        </div>

                    </div>

                    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">

                        <h2 className="text-3xl text-white mb-6">Кошик</h2>

                        <div className="space-y-4 mb-6">

                            {cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4">

                                    <ImageWithFallback
                                        src={item.image}
                                        className="w-16 h-16 rounded-xl"
                                    />

                                    <div className="flex-1">
                                        <div className="text-white">{item.name}</div>
                                        <div className="text-slate-400 text-sm">
                                            {item.size}
                                        </div>

                                        <div className="flex items-center gap-2 mt-2">

                                            <Button
                                                onClick={() =>
                                                    updateQuantity(item.id, item.quantity - 1)
                                                }
                                            >
                                                -
                                            </Button>

                                            <span className="text-white">
                                                {item.quantity}
                                            </span>

                                            <Button
                                                onClick={() =>
                                                    updateQuantity(item.id, item.quantity + 1)
                                                }
                                            >
                                                +
                                            </Button>

                                        </div>
                                    </div>

                                    <Button
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        <Trash2 />
                                    </Button>

                                </div>
                            ))}

                        </div>

                        <Separator className="bg-white/10 mb-4" />

                        <div className="text-white flex justify-between">
                            <span>Сума</span>
                            <span>{subtotal} ₴</span>
                        </div>

                        <div className="text-white flex justify-between">
                            <span>Доставка</span>
                            <span>{deliveryPrice} ₴</span>
                        </div>

                        <div className="text-white flex justify-between text-xl mt-4">
                            <span>Всього</span>
                            <span>{total} ₴</span>
                        </div>

                        <Button
                            className="w-full mt-6 disabled:cursor-not-allowed"
                            onClick={handleConfirmOrder}
                            disabled={isCartEmpty} 
                        >
                            Підтвердити
                            <ArrowRight />
                        </Button>

                    </div>

                </div>
            </div>

            <Dialog open={isOrderConfirmed} onOpenChange={setIsOrderConfirmed}>
                <DialogContent className="bg-gradient-to-br from-black via-slate-900 to-black border-white/20 backdrop-blur-md rounded-3xl max-w-md">
                    <DialogHeader>
                        <div className="flex justify-center mb-4">
                            <div className="bg-green-500/20 backdrop-blur-md p-4 rounded-full">
                                <CheckCircle2 className="h-16 w-16 text-green-400" />
                            </div>
                        </div>

                        <DialogTitle className="text-3xl text-center text-white mb-4">
                            Замовлення оформлено
                        </DialogTitle>

                        <DialogDescription className="text-center text-slate-300 text-lg">
                            Наш менеджер зв'яжеться з вами за кілька хвилин
                        </DialogDescription>
                    </DialogHeader>

                    <div className="mt-6 space-y-3">
                        <Link to="/products">
                            <Button className="w-full bg-white text-black hover:bg-white/90 rounded-full py-6 font-bold" onClick={handleCloseModal}>
                                Продовжити покупки
                            </Button>
                        </Link>

                        <Button
                            variant="ghost"
                            onClick={() => {
                                clearCart();
                                setIsOrderConfirmed(false);
                            }}className="w-full text-slate-300 hover:text-white hover:bg-white/10 rounded-full py-6">
                            Закрити
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

        </div>
    );
}