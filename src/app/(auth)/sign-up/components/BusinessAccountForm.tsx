"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";

export default function BusinessAccountForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    pharmacyName: "",
    pharmacyType: "",
    licenseFile: null as File | null,
    address: "",
    state: "",
    representativeName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (key: string, value: any) => setForm((prev) => ({ ...prev, [key]: value }));

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Business signup data:", form);
    router.push("/dashboard"); 
  };

  return (
    <div className="max-w-md mx-auto text-left">
      <div className="text-sm font-medium text-gray-400 mb-2 text-center">{step}/4</div>

      {step === 1 && (
        <>
          <h2 className="text-lg font-semibold text-[#0B0D26] mb-2 text-center">Sign up your pharmacy</h2>
          {/* <p className="text-sm text-[#666697] mb-4 text-center">Lorem ipsum dolor sit amet</p> */}

          <div className="space-y-4">
            <div>
              <Label>Pharmacy Name</Label>
              <Input
                placeholder="Enter pharmacy name"
                value={form.pharmacyName}
                onChange={(e) => onChange("pharmacyName", e.target.value)}
                className="py-4 bg-[#FAFBFF]"
              />
            </div>

            <div>
              <Label>Type of pharmacy</Label>
              <Select
                onValueChange={(v) => onChange("pharmacyType", v)}
                value={form.pharmacyType}
              >
                <SelectTrigger className="py-4 bg-[#FAFBFF]">
                  <SelectValue placeholder="Enter type of pharmacy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="hospital">Hospital</SelectItem>
                  <SelectItem value="wholesale">Wholesale</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Upload PCN License</Label>
              <div className="border border-dashed rounded-md p-4 text-center cursor-pointer bg-[#FAFBFF]">
                <input
                  type="file"
                  id="license"
                  className="hidden"
                  onChange={(e) => onChange("licenseFile", e.target.files?.[0] || null)}
                />
                <label htmlFor="license" className="flex flex-col items-center justify-center text-sm text-gray-500">
                  <Upload className="w-5 h-5 mb-1" />
                  Click to upload or drag and drop
                  <span className="text-xs text-gray-400 mt-1">Max. 10MB</span>
                </label>
              </div>
            </div>
          </div>

          <Button onClick={nextStep} className="mt-6 w-full bg-[#0B0D26] text-white py-5">Next</Button>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-lg font-semibold text-[#0B0D26] mb-2 text-center">What’s your location?</h2>
          {/* <p className="text-sm text-[#666697] mb-4 text-center">Lorem ipsum dolor sit amet</p> */}

          <div className="space-y-4">
            <div>
              <Label>Address</Label>
              <Input
                placeholder="Enter address"
                value={form.address}
                onChange={(e) => onChange("address", e.target.value)}
                className="py-4 bg-[#FAFBFF]"
              />
            </div>

            <div>
              <Label>State</Label>
              <Select
                onValueChange={(v) => onChange("state", v)}
                value={form.state}
              >
                <SelectTrigger className="py-4 bg-[#FAFBFF]">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lagos">Lagos</SelectItem>
                  <SelectItem value="abuja">Abuja</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={prevStep}>Back</Button>
            <Button onClick={nextStep} className="bg-[#0B0D26] text-white">Next</Button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="text-lg font-semibold text-[#0B0D26] mb-2 text-center">Sign up your pharmacy</h2>
          {/* <p className="text-sm text-[#666697] mb-4 text-center">Lorem ipsum dolor sit amet</p> */}

          <div className="space-y-4">
            <div>
              <Label>Representative Name</Label>
              <Input
                placeholder="Enter name"
                value={form.representativeName}
                onChange={(e) => onChange("representativeName", e.target.value)}
                className="py-4 bg-[#FAFBFF]"
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Enter email"
                value={form.email}
                onChange={(e) => onChange("email", e.target.value)}
                className="py-4 bg-[#FAFBFF]"
              />
            </div>
            <div>
              <Label>Phone Number</Label>
              <Input
                placeholder="Enter phone"
                value={form.phone}
                onChange={(e) => onChange("phone", e.target.value)}
                className="py-4 bg-[#FAFBFF]"
              />
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={prevStep}>Back</Button>
            <Button onClick={nextStep} className="bg-[#0B0D26] text-white">Next</Button>
          </div>
        </>
      )}

      {step === 4 && (
        <form onSubmit={handleSubmit}>
          <h2 className="text-lg font-semibold text-[#0B0D26] mb-2 text-center">Set up password</h2>
          {/* <p className="text-sm text-[#666697] mb-4 text-center">Lorem ipsum dolor sit amet</p> */}

          <div className="space-y-4">
            <div>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter password"
                value={form.password}
                onChange={(e) => onChange("password", e.target.value)}
                className="py-4 bg-[#FAFBFF]"
              />
            </div>
            <div>
              <Label>Re-enter Password</Label>
              <Input
                type="password"
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={(e) => onChange("confirmPassword", e.target.value)}
                className="py-4 bg-[#FAFBFF]"
              />
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={prevStep}>Back</Button>
            <Button type="submit" className="bg-[#0B0D26] text-white">Finish</Button>
          </div>
        </form>
      )}
    </div>
  );
}
