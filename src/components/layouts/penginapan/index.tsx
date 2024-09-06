import Select from "@/components/UI/Select";
import Option from "@/components/UI/Select/Option";
import {
  hotelMadinahAlmanasik,
  hotelMadinahRowa,
  hotelMekkahAlmanasik,
  hotelMekkahRowa,
} from "@/utils/dataUmrohCustom";
import { formatRupiah } from "@/utils/formatRupiah";
import React, { useState, useEffect } from "react";

type propstype = {
  setPenginapan: any;
};

const Penginapan = (props: propstype) => {
  const { setPenginapan } = props;
  const [selectedBintang, setSelectedBintang] = useState("");
  const [selectedHotel, setSelectedHotel] = useState("");
  const [selectedVendor, setSelectedVendor] = useState("");
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [selectedBintangMadinah, setSelectedBintangMadinah] = useState("");
  const [selectedHotelMadinah, setSelectedHotelMadinah] = useState("");
  const [selectedVendorMadinah, setSelectedVendorMadinah] = useState("");
  const [filteredHotelsMadinah, setFilteredHotelsMadinah] = useState([]);

  useEffect(() => {
    filterHotels();
  }, [selectedVendor, selectedBintang]);
  useEffect(() => {
    filterHotelsMadinah();
  }, [selectedVendorMadinah, selectedBintangMadinah]);

  const Data = () => {
    const dataMekkah = {
      bintang: selectedBintang,
      hotel: selectedHotel,
      vendor: selectedVendor,
    };

    const dataMadinah = {
      bintang: selectedBintangMadinah,
      hotel: selectedHotelMadinah,
      vendor: selectedVendorMadinah,
    };
    setPenginapan([dataMekkah, dataMadinah]);
  };

  useEffect(() => {
    Data();
  }, [
    selectedBintang,
    selectedHotel,
    selectedVendor,
    selectedBintangMadinah,
    selectedHotelMadinah,
    selectedVendorMadinah,
  ]);

  const filterHotelsMadinah = () => {
    let hotels: any = [];

    if (selectedVendor === "ROWA") {
      hotels = hotelMadinahRowa;
    } else if (selectedVendor === "ALMANASIK") {
      hotels = hotelMadinahAlmanasik;
    }

    if (selectedBintangMadinah) {
      hotels = hotels
        .map((hotel: any) => {
          const filteredTipe = hotel.tipe.find(
            (item: any) => item.bintang === selectedBintangMadinah
          );
          if (filteredTipe) {
            return {
              ...hotel,
              harga: filteredTipe.harga,
            };
          }
          return null;
        })
        .filter((hotel: any) => hotel !== null);
    }

    setFilteredHotelsMadinah(hotels);
  };
  const filterHotels = () => {
    let hotels: any = [];

    if (selectedVendor === "ROWA") {
      hotels = hotelMekkahRowa;
    } else if (selectedVendor === "ALMANASIK") {
      hotels = hotelMekkahAlmanasik;
    }

    if (selectedBintang) {
      hotels = hotels
        .map((hotel: any) => {
          const filteredTipe = hotel.tipe.find(
            (item: any) => item.bintang === selectedBintang
          );
          if (filteredTipe) {
            return {
              ...hotel,
              harga: filteredTipe.harga,
            };
          }
          return null;
        })
        .filter((hotel: any) => hotel !== null);
    }

    setFilteredHotels(hotels);
  };

  return (
    <div>
      <div>
        <Select
          name={"vendorMekkah"}
          title={"Vendor Mekkah"}
          onChange={(e: any) => setSelectedVendor(e.target.value)}
        >
          <Option value="ROWA">ROWA</Option>
          <Option value="ALMANASIK">ALMANASIK</Option>
        </Select>

        <Select
          name={"bintangMekkah"}
          title={"Bintang"}
          onChange={(e: any) => setSelectedBintang(e.target.value)}
        >
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
        </Select>

        <Select
          name={"hotelMekkah"}
          title={"Hotel Mekkah"}
          value={selectedHotel}
          onChange={(e: any) => setSelectedHotel(e.target.value)}
        >
          {filteredHotels.map((hotel: any) => (
            <Option key={hotel.name} value={hotel.name}>
              {hotel.name} -{" "}
              {hotel.harga ? `${formatRupiah(hotel.harga)}` : "Tidak Tersedia"}
            </Option>
          ))}
        </Select>
      </div>
      <div className="mt-5">
        <Select
          name={"vendorMadinah"}
          title={"Vendor Madinah"}
          onChange={(e: any) => setSelectedVendorMadinah(e.target.value)}
        >
          <Option value="ROWA">ROWA</Option>
          <Option value="ALMANASIK">ALMANASIK</Option>
        </Select>

        <Select
          name={"bintangMadinah"}
          title={"Bintang"}
          onChange={(e: any) => setSelectedBintangMadinah(e.target.value)}
        >
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
        </Select>

        <Select
          name={"hotelMadinah"}
          title={"Hotel Madinah"}
          value={selectedHotelMadinah}
          onChange={(e: any) => setSelectedHotelMadinah(e.target.value)}
        >
          {filteredHotelsMadinah.map((hotel: any) => (
            <Option key={hotel.name} value={hotel.name}>
              {hotel.name} -{" "}
              {hotel.harga ? `${formatRupiah(hotel.harga)}` : "Tidak Tersedia"}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default Penginapan;
