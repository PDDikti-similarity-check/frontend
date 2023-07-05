import React, { useState } from "react";
import "../App.css";
import {
    BsFillTrashFill,
    BsPersonFillAdd,
    BsFillKeyFill,
    BsFillExclamationTriangleFill,
    BsFillCloudFill,
    BsCheck,
    BsXLg
} from "react-icons/bs";
import { IoPaperPlane } from "react-icons/io5";
import { Button, OutlineButton } from "./Button";

const DangerModalHapus = ({
    description1,
    description2,
    tittle,
    object,
    leftbutton,
    rightbutton,
    onClickRight,
    onClickLeft,
}) => {
    return (
        <div
            class="absolute z-30"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div class="fixed inset-0 bg-neutral-90 bg-opacity-20 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto motion-safe:animate-fade-in drop-shadow-2xl">
                <div class="flex min-h-full justify-center text-center items-center">
                    <div class="relative transform overflow-hidden rounded-[12px] bg-neutral-10 text-center transition-all w-full max-w-[397px]">
                        <div class="flex w-full justify-center items-center flex-col px-8 py-4 space-y-2">
                            <div class="mx-auto flex h-[36px] w-[36px] items-center justify-center rounded-full bg-danger-main">
                                <BsFillTrashFill className="text-l text-neutral-10"></BsFillTrashFill>
                            </div>
                            <div className="p-[10px] space-y-2">
                                <p class="text-m font-semibold">{tittle}</p>
                                <div class="w-[348px] px-[10px] text-center text-sm">
                                    <p  class="whitespace-normal break-words">
                                        {description1} {object} {description2}
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="">
                                    <OutlineButton
                                        variant="button-danger"
                                        onClick={onClickLeft}
                                    >
                                        {leftbutton}
                                    </OutlineButton>
                                </div>
                                <div className="">
                                    <Button
                                        variant="button-danger"
                                        onClick={onClickRight}
                                    >
                                        {rightbutton}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SuccessModalDangerHapus = ({
    description1,
    description2,
    object,
    rightbutton,
    onClick,
}) => {
    return (
        <div
            class="absolute z-30"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div class="fixed inset-0 bg-neutral-90 bg-opacity-20 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto motion-safe:animate-fade-in drop-shadow-2xl">
                <div class="flex min-h-full justify-center text-center items-center">
                    <div class="relative transform overflow-hidden rounded-[12px] bg-neutral-10 text-center transition-all w-full max-w-[397px]">
                        <div class="flex w-full justify-center items-center flex-col px-8 py-4 space-y-4">
                            <div class="mx-auto flex h-[36px] w-[36px] items-center justify-center rounded-full bg-danger-main">
                                <BsFillTrashFill className="text-l text-neutral-10"></BsFillTrashFill>
                            </div>
                            <div class="w-[348px] px-[10px] text-center text-sm">
                                    <p  class="whitespace-normal break-words">
                                        {description1} {object} {description2}
                                    </p>
                            </div>
                            <div className="">
                                <Button
                                    onClick={onClick}
                                    variant="button-danger"
                                >
                                    {rightbutton}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WarningModalEditProfile = ({
    description1,
    description2,
    tittle,
    object,
    leftbutton,
    rightbutton,
    onClickRight,
    onClickLeft,
}) => {
    return (
        <div
            class="absolute z-30"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div class="fixed inset-0 bg-neutral-90 bg-opacity-20 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto motion-safe:animate-fade-in drop-shadow-2xl">
                <div class="flex min-h-full justify-center text-center items-center">
                    <div class="relative transform overflow-hidden rounded-[12px] bg-neutral-10 text-center transition-all ">
                        <div class="flex w-full justify-center items-center flex-col px-8 py-4 space-y-2">
                            <div class="mx-auto flex h-[36px] w-[36px] items-center justify-center rounded-full bg-warning">
                                <BsPersonFillAdd className="text-l text-neutral-10"></BsPersonFillAdd>
                            </div>
                            <div className="p-[10px] space-y-2">
                                <p class="text-m font-semibold">{tittle}</p>
                                <div class="w-[348px] px-[10px] text-center text-sm">
                                    <p  class="whitespace-normal break-words">
                                        {description1} {object} {description2}
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-4 justify-center">
                                <div className="">
                                    <OutlineButton
                                        variant="button-warning"
                                        onClick={onClickLeft}
                                    >
                                        {leftbutton}
                                    </OutlineButton>
                                </div>
                                <div className="">
                                    <Button
                                        variant="button-warning"
                                        onClick={onClickRight}
                                    >
                                        {rightbutton}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SuccessModalWarningEditProfile = ({
    description1,
    description2,
    object,
    rightbutton,
    onClick,
}) => {
    return (
        <div
            class="absolute z-30"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div class="fixed inset-0 bg-neutral-90 bg-opacity-20 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto motion-safe:animate-fade-in drop-shadow-2xl">
                <div class="flex min-h-full justify-center text-center items-center">
                    <div class="relative transform overflow-hidden rounded-[12px] bg-neutral-10 text-center transition-all ">
                        <div class="flex w-ful justify-center items-center flex-col px-8 py-4 space-y-4">
                            <div class="mx-auto flex h-[36px] w-[36px] items-center justify-center rounded-full bg-warning">
                                <BsPersonFillAdd className="text-l text-neutral-10"></BsPersonFillAdd>
                            </div>
                            <div class="w-[348px] px-[10px] text-center text-sm">
                                    <p  class="whitespace-normal break-words">
                                        {description1} {object} {description2}
                                    </p>
                                </div>
                            <div className="">
                                <Button
                                    onClick={onClick}
                                    variant="button-warning"
                                >
                                    {rightbutton}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const InfoModalRegister= ({
    description1,
    description2,
    tittle,
    object,
    leftbutton,
    rightbutton,
    onClickRight,
    onClickLeft,
}) => {
    return (
        <div
            class="absolute z-30"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div class="fixed inset-0 bg-neutral-90 bg-opacity-20 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto motion-safe:animate-fade-in drop-shadow-2xl">
                <div class="flex min-h-full justify-center text-center items-center">
                    <div class="relative transform overflow-hidden rounded-[12px] bg-neutral-10 text-center transition-all ">
                        <div class="flex w-full justify-center items-center flex-col px-8 py-4 space-y-2">
                            <div class="mx-auto flex h-[36px] w-[36px] items-center justify-center rounded-full bg-blue">
                                <BsPersonFillAdd className="text-l text-neutral-10"></BsPersonFillAdd>
                            </div>
                            <div className="p-[10px] space-y-2">
                                <p class="text-m font-semibold">{tittle}</p>
                                <div class="w-[348px] px-[10px] text-center text-sm">
                                    <p  class="whitespace-normal break-words">
                                        {description1} {object} {description2}
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-4 justify-center">
                                <div className="">
                                    <OutlineButton
                                        onClick={onClickLeft}
                                    >
                                        {leftbutton}
                                    </OutlineButton>
                                </div>
                                <div className="">
                                    <Button
                                        onClick={onClickRight}
                                    >
                                        {rightbutton}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SuccessModalRegister = ({
    description1,
    description2,
    object,
    rightbutton,
    onClick,
}) => {
    return (
        <div
            class="absolute z-30"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div class="fixed inset-0 bg-neutral-90 bg-opacity-20 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto motion-safe:animate-fade-in drop-shadow-2xl">
                <div class="flex min-h-full justify-center text-center items-center">
                    <div class="relative transform overflow-hidden rounded-[12px] bg-neutral-10 text-center transition-all ">
                        <div class="flex w-ful justify-center items-center flex-col px-8 py-4 space-y-4">
                            <div class="mx-auto flex h-[36px] w-[36px] items-center justify-center rounded-full bg-blue">
                                <BsPersonFillAdd className="text-l text-neutral-10"></BsPersonFillAdd>
                            </div>
                            <div class="w-[348px] px-[10px] text-center text-sm">
                                    <p  class="whitespace-normal break-words">
                                        {description1} {object} {description2}
                                    </p>
                                </div>
                            <div className="">
                                <Button
                                    onClick={onClick}
                                >
                                    {rightbutton}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WarningModalEditPass = ({
    description1,
    description2,
    tittle,
    object,
    leftbutton,
    rightbutton,
    onClickRight,
    onClickLeft,
}) => {
    return (
        <div
            class="absolute z-30"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div class="fixed inset-0 bg-neutral-90 bg-opacity-20 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto motion-safe:animate-fade-in drop-shadow-2xl">
                <div class="flex min-h-full justify-center text-center items-center">
                    <div class="relative transform overflow-hidden rounded-[12px] bg-neutral-10 text-center transition-all w-full max-w-[394px]">
                        <div class="flex w-full justify-center items-center flex-col px-8 py-4 space-y-2">
                            <div class="mx-auto flex h-[36px] w-[36px] items-center justify-center rounded-full bg-warning">
                                <BsFillKeyFill className="text-l text-neutral-10"></BsFillKeyFill>
                            </div>
                            <div className="p-[10px] space-y-2">
                                <p class="text-m font-semibold">{tittle}</p>
                                <div class="w-[348px] px-[10px] text-center text-sm">
                                    <p  class="whitespace-normal break-words">
                                        {description1} {object} {description2}
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="">
                                    <OutlineButton
                                        variant="button-warning"
                                        onClick={onClickLeft}
                                    >
                                        {leftbutton}
                                    </OutlineButton>
                                </div>
                                <div className="">
                                    <Button
                                        variant="button-warning"
                                        onClick={onClickRight}
                                    >
                                        {rightbutton}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SuccessModalWarningEditPass = ({
    description1,
    description2,
    object,
    rightbutton,
    onClick,
}) => {
    return (
        <div
            class="absolute z-30"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div class="fixed inset-0 bg-neutral-90 bg-opacity-20 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto motion-safe:animate-fade-in drop-shadow-2xl">
                <div class="flex min-h-full justify-center text-center items-center">
                    <div class="relative transform overflow-hidden rounded-[12px] bg-neutral-10 text-center transition-all w-full max-w-[397px]">
                        <div class="flex w-full justify-center items-center flex-col px-8 py-4 space-y-4">
                            <div class="mx-auto flex h-[36px] w-[36px] items-center justify-center rounded-full bg-warning">
                                <BsFillKeyFill className="text-l text-neutral-10"></BsFillKeyFill>
                            </div>
                            <div class="w-[348px] px-[10px] text-center text-sm">
                                <p  class="whitespace-normal break-words">
                                    {description1} {object} {description2}
                                </p>
                            </div>
                            <div className="">
                                <Button
                                    onClick={onClick}
                                    variant="button-warning"
                                >
                                    {rightbutton}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DangerModalNonaktifkan = ({
    description1,
    description2,
    tittle,
    object,
    leftbutton,
    rightbutton,
    onClickRight,
    onClickLeft,
}) => {
    return (
        <div
            class="absolute z-30"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div class="fixed inset-0 bg-neutral-90 bg-opacity-20 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto motion-safe:animate-fade-in drop-shadow-2xl">
                <div class="flex min-h-full justify-center text-center items-center">
                    <div class="relative transform overflow-hidden rounded-[12px] bg-neutral-10 text-center transition-all w-full max-w-[397px]">
                        <div class="flex w-full justify-center items-center flex-col px-8 py-4 space-y-2">
                            <div class="mx-auto flex h-[36px] w-[36px] items-center justify-center rounded-full bg-danger-main">
                                <BsFillExclamationTriangleFill className="text-l text-neutral-10"></BsFillExclamationTriangleFill>
                            </div>
                            <div className="p-[10px] space-y-2">
                                <p class="text-m font-semibold">{tittle}</p>
                                <div class="w-[348px] px-[10px] text-center text-sm">
                                    <p  class="whitespace-normal break-words">
                                        {description1} {object} {description2}
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="">
                                    <OutlineButton
                                        variant="button-danger"
                                        onClick={onClickLeft}
                                    >
                                        {leftbutton}
                                    </OutlineButton>
                                </div>
                                <div className="">
                                    <Button
                                        variant="button-danger"
                                        onClick={onClickRight}
                                    >
                                        {rightbutton}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SuccessModalDangerNonaktifkan = ({
    description1,
    description2,
    object,
    rightbutton,
    onClick,
}) => {
    return (
        <div
            class="absolute z-30"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div class="fixed inset-0 bg-neutral-90 bg-opacity-20 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto motion-safe:animate-fade-in  drop-shadow-2xl">
                <div class="flex min-h-full justify-center text-center items-center">
                    <div class="relative transform overflow-hidden rounded-[12px] bg-neutral-10 text-center transition-all w-full max-w-[397px]">
                        <div class="flex w-full justify-center items-center flex-col px-8 py-4 space-y-4">
                            <div class="mx-auto flex h-[36px] w-[36px] items-center justify-center rounded-full bg-danger-main">
                                <BsFillExclamationTriangleFill className="text-l text-neutral-10"></BsFillExclamationTriangleFill>
                            </div>
                            <div class="w-[348px] px-[10px] text-center text-sm">
                                <p  class="whitespace-normal break-words">
                                    {description1} {object} {description2}
                                </p>
                            </div>
                            <div className="">
                                <Button
                                    onClick={onClick}
                                    variant="button-danger"
                                >
                                    {rightbutton}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ConfirmModalAktifkan = ({
    description1,
    description2,
    tittle,
    object,
    leftbutton,
    rightbutton,
    onClickRight,
    onClickLeft,
}) => {
    return (
        <div
            class="absolute z-30"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div class="fixed inset-0 bg-neutral-90 bg-opacity-20 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto motion-safe:animate-fade-in">
                <div class="flex min-h-full justify-center text-center items-center drop-shadow-2xl">
                    <div class="relative transform overflow-hidden rounded-[12px] bg-neutral-10 text-center transition-all w-full max-w-[397px]">
                        <div class="flex w-full justify-center items-center flex-col px-8 py-4 space-y-2">
                            <div class="mx-auto flex h-[36px] w-[36px] items-center justify-center rounded-full bg-blue">
                                <BsFillExclamationTriangleFill className="text-l text-neutral-10"></BsFillExclamationTriangleFill>
                            </div>
                            <div className="p-[10px] space-y-2">
                                <p class="text-m font-semibold">{tittle}</p>
                                <div class="w-[348px] px-[10px] text-center text-sm">
                                    <p  class="whitespace-normal break-words">
                                        {description1} {object} {description2}
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="">
                                    <OutlineButton
                                        // variant='button-danger'
                                        onClick={onClickLeft}
                                    >
                                        {leftbutton}
                                    </OutlineButton>
                                </div>
                                <div className="">
                                    <Button
                                        // variant='button-danger'
                                        onClick={onClickRight}
                                    >
                                        {rightbutton}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SuccessModalConfirmAktifkan = ({
    description1,
    description2,
    object,
    rightbutton,
    onClick,
}) => {
    return (
        <div
            class="absolute z-30"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div class="fixed inset-0 bg-neutral-90 bg-opacity-20 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto motion-safe:animate-fade-in  drop-shadow-2xl">
                <div class="flex min-h-full justify-center text-center items-center">
                    <div class="relative transform overflow-hidden rounded-[12px] bg-neutral-10 text-center transition-all w-full max-w-[397px]">
                        <div class="flex w-full justify-center items-center flex-col px-8 py-4 space-y-4">
                            <div class="mx-auto flex h-[36px] w-[36px] items-center justify-center rounded-full bg-primary-main">
                                <BsFillExclamationTriangleFill className="text-l text-neutral-10"></BsFillExclamationTriangleFill>
                            </div>
                            <div class="w-[348px] px-[10px] text-center text-sm">
                                <p  class="whitespace-normal break-words">
                                    {description1} {object} {description2}
                                </p>
                            </div>
                            <div className="">
                                <Button
                                    onClick={onClick}
                                >
                                    {rightbutton}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SuccessModalNewPass = ({
    description1,
    description2,
    object,
    rightbutton,
    onClick,
}) => {
    return (
        <div
            class="absolute z-30"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div class="fixed inset-0 bg-neutral-90 bg-opacity-20 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto motion-safe:animate-fade-in drop-shadow-2xl">
                <div class="flex min-h-full justify-center text-center items-center">
                    <div class="relative transform overflow-hidden rounded-[12px] bg-neutral-10 text-center transition-all w-full max-w-[397px]">
                        <div class="flex w-full justify-center items-center flex-col px-8 py-4 space-y-4">
                            <div class="mx-auto flex h-[36px] w-[36px] items-center justify-center rounded-full bg-sukses">
                                <BsCheck className="text-[20px] text-neutral-10"></BsCheck>
                            </div>
                            <div class="w-[348px] px-[10px] text-center text-sm">
                                    <p  class="whitespace-normal break-words">
                                        {description1} {object} {description2}
                                    </p>
                            </div>
                            <div className="">
                                <Button onClick={onClick} variant="button-sukses">{rightbutton}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {
    DangerModalHapus,
    SuccessModalDangerHapus,
    WarningModalEditProfile,
    SuccessModalWarningEditProfile,
    WarningModalEditPass,
    SuccessModalWarningEditPass,
    DangerModalNonaktifkan,
    SuccessModalDangerNonaktifkan,
    ConfirmModalAktifkan,
    SuccessModalConfirmAktifkan,
    SuccessModalNewPass,
    InfoModalRegister,
    SuccessModalRegister
};