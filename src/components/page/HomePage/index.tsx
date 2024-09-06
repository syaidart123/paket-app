import Penginapan from "@/components/layouts/penginapan";
import Input from "@/components/UI/Input/Index";
import Select from "@/components/UI/Select";
import Option from "@/components/UI/Select/Option";
import {
  handling,
  kotaAsal,
  maskapai,
  paketHari,
  periodeBulan,
} from "@/utils/dataUmrohCustom";
import { formatRupiah } from "@/utils/formatRupiah";
import React, { Dispatch, useState } from "react";
import DetailPage from "../detailPage";

const HomePage = () => {
  const [modalSimpan, setModalSimpan] = useState<any>(false);
  const [selectedItem, setSelectedItem] = useState<{
    name: string;
    harga: number;
  } | null>(null);
  const [selectedPerlengkapan, setSelectedPerlengkapan] = useState<{
    name: string;
    harga: number;
  } | null>(null);
  const [selectedAsuransi, setSelectedAsuransi] = useState<{
    name: string;
    harga: number;
  } | null>(null);
  const [selectedManasik, setSelectedManasik] = useState<{
    name: string;
    harga: number;
  } | null>(null);
  const [selectedDosmetik, setSelectedDosmetik] = useState<{
    name: string;
    harga: number;
  } | null>(null);
  const [selectedVisa, setSelectedVisa] = useState<{
    name: string;
    harga: number;
  } | null>(null);
  const [selectedTransportasi, setSelectedTransportasi] = useState<{
    name: string;
    biayaSewa: number;
    biayaPerorangan: number;
  } | null>(null);
  const [selectedZiarahTambahan, setSelectedZiarahTambahan] = useState<{
    name: string;
    harga: number;
  } | null>(null);
  const [selectedKeretaCepat, setSelectedKeretaCepat] = useState<{
    name: string;
    harga: number;
  } | null>(null);
  const [selectedJasaMuthawif, setSelectedJasaMuthawif] = useState<{
    name: string;
    harga: number;
  } | null>(null);
  const [selectedJumlahHari, setSelectedJumlahHari] = useState<{
    name: string;
    harga: number;
  } | null>(null);
  const [selectedTourLeader, setSelectedTourLeader] = useState<{
    checked: boolean;
    harga: number;
  }>({ checked: false, harga: handling[0].tourLeader[1].harga });
  const [selectedDeskripsi, setSelectedDeskripsi] = useState<{
    name: string;
    deskripsi: string;
    intrenasi: string;
  } | null>(null);

  const [penginapan, setPenginapan] = useState([]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedItem = handling[0].handlingSaudi.find(
      (item) => item.name === selectedValue
    );
    setSelectedItem(selectedItem || null);
  };
  const handleSelectPerlengkapan = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    const selectedItem = handling[0].perlengkapan.find(
      (item) => item.name === selectedValue
    );
    setSelectedPerlengkapan(selectedItem || null);
  };
  const handleSelectAsuransi = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    const selectedItem = handling[0].asuransi.find(
      (item) => item.name === selectedValue
    );
    setSelectedAsuransi(selectedItem || null);
  };
  const handleSelectManasik = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedItem = handling[0].jasaManasik.find(
      (item) => item.name === selectedValue
    );
    setSelectedManasik(selectedItem || null);
  };
  const handleSelectedDomestik = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    const selectedItem = handling[0].handlingDomestik.find(
      (item) => item.name === selectedValue
    );
    setSelectedDosmetik(selectedItem || null);
  };
  const handleSelectedVisa = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedItem = handling[0].visaUmroh.find(
      (item) => item.name === selectedValue
    );
    setSelectedVisa(selectedItem || null);
  };
  const handleSelectedTransportasi = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    const selectedItem = handling[0].transportasi.find(
      (item) => item.name === selectedValue
    );
    setSelectedTransportasi(selectedItem || null);
  };
  const handleSelectedZiarahTambahan = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    const selectedItem = handling[0].ziarahTambahan.find(
      (item) => item.name === selectedValue
    );
    setSelectedZiarahTambahan(selectedItem || null);
  };
  const handleSelectedKeretaCepat = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    const selectedItem = handling[0].keretaCepat.find(
      (item) => item.name === selectedValue
    );
    setSelectedKeretaCepat(selectedItem || null);
  };
  const handleSelectedJasaMuthawif = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    const selectedItem = handling[0].jasaMuthawif.find(
      (item) => item.name === selectedValue
    );
    setSelectedJasaMuthawif(selectedItem || null);
  };
  const handleSelectedJumlahHari = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    const selectedItem = handling[0].jumlahHari.find(
      (item) => item.name === selectedValue
    );
    setSelectedJumlahHari(selectedItem || null);
  };
  const handleSelectedTourLeader = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = event.target.checked;
    const tourLeaderOption = handling[0].tourLeader[1];
    setSelectedTourLeader({
      checked: isChecked,
      harga: isChecked ? tourLeaderOption.harga : 0,
    });
  };
  const handleSelectedDeskripsi = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    const selectedItem = handling[0].deskripsi.find(
      (item) => item.name === selectedValue
    );
    setSelectedDeskripsi(selectedItem || null);
  };

  const [data, setData] = useState([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const result: any = {
      periodeBulan: form.periode.value,
      tanggal: form.tanggal.value,
      kotaAsal: form.kotaAsal.value,
      kotaTujuan: form.kotaTujuan.value,
      paketHari: form.paketHari.value,
      pulangDari: form.pulangDari.value,
      tujuanPulang: form.tujuanPulangKe.value,
      maskapai: form.maskapai.value,
      jumlahPeserta: form.jumlahPeserta.value,
      penginapan: penginapan,
      handlingSaudi: form.handlingSaudi.value,
      hargaHandling: form.hargaHandling.value,
      perlengkapan: form.perlengkapan.value,
      perlengkapanHarga: form.perlengkapanHarga.value,
      asuransi: form.asuransi.value,
      asuransiHarga: form.asuransiHarga.value,
      jasaManasik: form.jasaManasik.value,
      manasikHarga: form.manasikHarga.value,
      handlingDomestik: form.handlingDosmetik.value,
      domestikHarga: form.dosmetikHarga.value,
      visaUmroh: form.visaUmroh.value,
      visaHarga: form.visaHarga.value,
      transportasi: form.transportasi.value,
      biayaSewa: form.biayaSewa.value,
      biayaPerorangan: form.biayaPerorangan.value,
      ziarahTambahan: form.ziarahTambahan.value,
      ziarahTambahanHarga: form.ziarahTambahanHarga.value,
      keretaCepat: form.keretaCepat.value,
      keretaCepatHarga: form.keretaCepatHarga.value,
      jasaMuthawif: form.jasaMuthawif.value,
      jasaMuthawifHarga: form.jasaMuthawifHarga.value,
      jumlahHari: form.jumlahHari.value,
      jumlahHariHarga: form.jumlahHariHarga.value,
      tourLeader: form.tourLeader.value,
      tourLeaderHarga: form.tourLeaderHarga.value,
      deskripsi: form.deskripsi.value,
    };

    setData(result);
  };

  return (
    <>
      HomePage
      <div>
        <form className="p-4" onSubmit={handleSubmit}>
          <Select name="periode" title="Periode">
            {periodeBulan.map((item) => (
              <Option key={item.id} value={item.name}>
                {item.name}
              </Option>
            ))}
          </Select>
          <Input name={"tanggal"} title={"Tanggal Berangkat"} type={"date"} />
          <div className="grid grid-cols-2 gap-2">
            <Select name="kotaAsal" title="Kota Asal">
              {kotaAsal.map((item) => (
                <Option key={item.id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <Select name="kotaTujuan" title="Kota Tujuan">
              <Option value="Jeddah">Jeddah</Option>
              <Option value="Madinah">Madinah</Option>
            </Select>
          </div>
          <Select name="paketHari" title="Paket Hari">
            {paketHari.map((item) => (
              <Option key={item.id} value={item.name}>
                {item.name}
              </Option>
            ))}
          </Select>
          <div className="grid grid-cols-2 gap-2">
            <Select name="pulangDari" title="Pulang Dari">
              <Option value="Jeddah">Jeddah</Option>
              <Option value="Madinah">Madinah</Option>
            </Select>
            <Select name="tujuanPulangKe" title="Tujuan Ke">
              {kotaAsal.map((item) => (
                <Option key={item.id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </div>
          <Select name="maskapai" title="Maskapai">
            {maskapai.map((item) => (
              <Option key={item.id} value={item.name}>
                {item.name} - {item.harga}
              </Option>
            ))}
          </Select>
          <Input
            name={"jumlahPeserta"}
            title={"Jumlah Peserta"}
            type={"number"}
          />
          <p className="my-5 text-xl font-bold p-2 border-t ">Penginapan</p>
          <Penginapan penginapan={penginapan} setPenginapan={setPenginapan} />
          <p className="my-5 text-xl font-bold p-2 border-t ">Jasa Handling</p>
          <div>
            <Select
              name="handlingSaudi"
              title="Handling Saudia"
              onChange={handleSelect}
            >
              {handling[0].handlingSaudi.map((item) => (
                <Option key={item.name} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>

            <Input
              name={"hargaHandling"}
              type="text"
              value={formatRupiah(selectedItem?.harga || 0)}
              disabled
            />
          </div>
          <div>
            <Select
              name="perlengkapan"
              title="Perlengkapan"
              onChange={handleSelectPerlengkapan}
            >
              {handling[0].perlengkapan.map((item, id) => (
                <Option key={id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <Input
              name={"perlengkapanHarga"}
              type={"text"}
              value={formatRupiah(selectedPerlengkapan?.harga || 0)}
              disabled
            />
          </div>
          <div>
            <Select
              name="asuransi"
              title="Asuransi"
              onChange={handleSelectAsuransi}
            >
              {handling[0].asuransi.map((item, id) => (
                <Option key={id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <Input
              name={"asuransiHarga"}
              type={"text"}
              value={formatRupiah(selectedAsuransi?.harga || 0)}
              disabled
            />
          </div>
          <div>
            <Select
              name="jasaManasik"
              title="Jasa Manasik"
              onChange={handleSelectManasik}
            >
              {handling[0].jasaManasik.map((item, id) => (
                <Option key={id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <Input
              name={"manasikHarga"}
              type={"text"}
              value={formatRupiah(selectedManasik?.harga || 0)}
              disabled
            />
          </div>
          <div>
            <Select
              name="handlingDosmetik"
              title="Handling Dosmetik"
              onChange={handleSelectedDomestik}
            >
              {handling[0].handlingDomestik.map((item, id) => (
                <Option key={id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <Input
              name={"dosmetikHarga"}
              type={"text"}
              value={formatRupiah(selectedDosmetik?.harga || 0)}
              disabled
            />
          </div>
          <div>
            <Select
              name="visaUmroh"
              title="Visa Umroh"
              onChange={handleSelectedVisa}
            >
              {handling[0].visaUmroh.map((item, id) => (
                <Option key={id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <Input
              name={"visaHarga"}
              type={"text"}
              value={formatRupiah(selectedVisa?.harga || 0)}
              disabled
            />
          </div>
          <div>
            <Select
              name="transportasi"
              title="Transportasi"
              onChange={handleSelectedTransportasi}
            >
              {handling[0].transportasi.map((item, id) => (
                <Option key={id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <div className="flex gap-2">
              <Input
                name={"biayaSewa"}
                type={"text"}
                value={formatRupiah(selectedTransportasi?.biayaSewa || 0)}
                disabled
              />
              <Input
                name={"biayaPerorangan"}
                type={"text"}
                value={formatRupiah(selectedTransportasi?.biayaPerorangan || 0)}
                disabled
              />
            </div>
          </div>
          <div>
            <Select
              name="ziarahTambahan"
              title="Ziarah Tambahan"
              onChange={handleSelectedZiarahTambahan}
            >
              {handling[0].ziarahTambahan.map((item, id) => (
                <Option key={id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <Input
              name={"ziarahTambahanHarga"}
              type={"text"}
              value={formatRupiah(selectedZiarahTambahan?.harga || 0)}
              disabled
            />
          </div>
          <div>
            <Select
              name="keretaCepat"
              title="Kereta Cepat"
              onChange={handleSelectedKeretaCepat}
            >
              {handling[0].keretaCepat.map((item, id) => (
                <Option key={id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <Input
              name={"keretaCepatHarga"}
              type={"text"}
              value={formatRupiah(selectedKeretaCepat?.harga || 0)}
              disabled
            />
          </div>
          <div>
            <Select
              name="jasaMuthawif"
              title="Jasa Muthawif"
              onChange={handleSelectedJasaMuthawif}
            >
              {handling[0].jasaMuthawif.map((item, id) => (
                <Option key={id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <Input
              name={"jasaMuthawifHarga"}
              type={"text"}
              value={formatRupiah(selectedJasaMuthawif?.harga || 0)}
              disabled
            />
          </div>
          <div>
            <Select
              name="jumlahHari"
              title="Jumlah Hari"
              onChange={handleSelectedJumlahHari}
            >
              {handling[0].jumlahHari.map((item, id) => (
                <Option key={id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <Input
              name={"jumlahHariHarga"}
              type={"text"}
              value={formatRupiah(selectedJumlahHari?.harga || 0)}
              disabled
            />
          </div>
          <div>
            <Input
              name={"tourLeader"}
              title="Pakai Tour Leader"
              type="checkbox"
              isChecked={selectedTourLeader.checked}
              onChange={handleSelectedTourLeader}
            />
            <Input
              name="tourLeaderHarga"
              type={"text"}
              disabled
              value={formatRupiah(
                selectedTourLeader.checked ? selectedTourLeader.harga : 0
              )}
            />
          </div>
          <Input
            name="biayaAdmin"
            type={"text"}
            disabled
            value={150000}
            title={"Biaya Admin"}
          />
          <div>
            <Select
              name="deskripsi"
              title="Deskripsi"
              onChange={handleSelectedDeskripsi}
            >
              {handling[0].deskripsi.map((item, id) => (
                <Option key={id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <textarea
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              rows={3}
              name={"deskripsi"}
              value={selectedDeskripsi?.deskripsi}
              disabled
            />
            <textarea
              className="border my-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              rows={3}
              name={"intrenasi"}
              value={selectedDeskripsi?.intrenasi}
              disabled
            />
          </div>
          <div className="">
            <button
              className="w-full bg-blue-500 text-white p-2 rounded-lg mt-5"
              type="submit"
              onClick={() => setModalSimpan(true)}
            >
              simpan
            </button>
          </div>
        </form>
      </div>
      {modalSimpan && (
        <DetailPage data={data} setModalSimpan={setModalSimpan} />
      )}
    </>
  );
};

export default HomePage;
