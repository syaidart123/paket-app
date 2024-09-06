import Modal from "@/components/UI/Modal";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

type propsTypes = {
  data: any;
  setModalSimpan?: any;
};

const DetailPage = (props: propsTypes) => {
  const { data, setModalSimpan } = props;
  const pageRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => pageRef.current,
  });

  return (
    <div>
      <Modal onClose={() => setModalSimpan(false)}>
        <div className="container mx-auto p-6 bg-gray-50" ref={pageRef}>
          <h1 className="text-3xl font-bold text-center mb-6">
            Paket Umroh {data.paketHari}
          </h1>

          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Detail Umroh</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p>
                  <strong>Kota Asal:</strong> {data?.kotaAsal}
                </p>
                <p>
                  <strong>Kota Tujuan:</strong> {data?.kotaTujuan}
                </p>
                <p>
                  <strong>Pulang Dari:</strong> {data?.pulangDari}
                </p>
                <p>
                  <strong>Tanggal Berangkat:</strong> {data?.tanggal}
                </p>
              </div>
              <div>
                <p>
                  <strong>Periode:</strong> {data.periodeBulan}
                </p>
                <p>
                  <strong>Maskapai:</strong> {data.maskapai}
                </p>
                <p>
                  <strong>Transportasi:</strong> {data.transportasi}
                </p>
              </div>
            </div>
          </div>

          {/* Penginapan */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Penginapan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data?.penginapan?.map((hotel: any, index: any) => (
                <div key={index} className="p-4 border rounded-lg">
                  <p>
                    <strong>Hotel:</strong> {hotel.hotel}
                  </p>
                  <p>
                    <strong>Bintang:</strong> {hotel.bintang}
                  </p>
                  <p>
                    <strong>Vendor:</strong> {hotel.vendor}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Harga */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Rincian Biaya</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p>
                  <strong>Asuransi:</strong> {data.asuransi} (
                  {data.asuransiHarga})
                </p>
                <p>
                  <strong>Biaya Perorangan:</strong> {data.biayaPerorangan}
                </p>
                <p>
                  <strong>Biaya Sewa:</strong> {data.biayaSewa}
                </p>
                <p>
                  <strong>Harga Handling:</strong> {data.hargaHandling}
                </p>
                <p>
                  <strong>Kereta Cepat:</strong> {data.keretaCepat} (
                  {data.keretaCepatHarga})
                </p>
              </div>
              <div>
                <p>
                  <strong>Manasik:</strong> {data.jasaManasik} (
                  {data.manasikHarga})
                </p>
                <p>
                  <strong>Jasa Muthawif:</strong> {data.jasaMuthawif} (
                  {data.jasaMuthawifHarga})
                </p>
                <p>
                  <strong>Jumlah Hari:</strong> {data.jumlahHari} (
                  {data.jumlahHariHarga})
                </p>
                <p>
                  <strong>Tour Leader:</strong> {data.tourLeaderHarga}
                </p>
                <p>
                  <strong>Ziarah Tambahan:</strong> {data.ziarahTambahan} (
                  {data.ziarahTambahanHarga})
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Perlengkapan</h2>
            <p>
              <strong>Perlengkapan:</strong> {data.perlengkapan} (
              {data.perlengkapanHarga})
            </p>
          </div>
          <div className="text-right mt-4">
            <button
              onClick={handlePrint}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Cetak PDF
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DetailPage;
