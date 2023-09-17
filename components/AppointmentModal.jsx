import React, { useState } from "react";
import styles from "../app/modules/modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import { GrAddCircle } from "react-icons/gr";
import { IoIosSave } from "react-icons/io";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
// import AuthenticatedQuery from "../helpers/AuthenticatedQuery";

const AppointmentModalSchema = Yup.object().shape({
  chargeDentist: Yup.string().required("required"),
  date: Yup.string().required("required"),
  startTime: Yup.string().required("required"),
  endTime: Yup.string().required("required"),
  notes: Yup.string()
    .required("required")
    .min(3, "notes should not be less than 3 character"),
  chargeDentist: Yup.string().required("required"),
});

export default function AppointmentModal({ setIsOpen }) {
  const patientsList = [
    { label: "Shark", value: "Shark" },
    { label: "build", value: "build" },
    { label: "nona", value: "nona" },
  ];

  const dentistChargeList = [
    { label: "Shark", value: "Shark" },
    { label: "build", value: "build" },
    { label: "nona", value: "nona" },
  ];

  const [success, setSuccess] = useState(null);

  const { getToken } = useAuth();
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className='flex items-center justify-start p-2'>
            <GrAddCircle />
            <h5 className='text-black pl-1'>Add Appointment</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <Formik
            initialValues={{
              patientId: 1, // we need to make logic here to make this dynamically
              patient: "",
              date: "",
              startTime: "",
              endTime: "",
              notes: "",
              chargeDentist: "",
              dentistInChargeId: 2, // we need to make logic here to make this dynamically
            }}
            validationSchema={AppointmentModalSchema}
            onSubmit={async (values) => {
              const { ...data } = values;
              const response = await axios
                .post("http://localhost:3333/appointment", data, {
                  headers: {
                    Authorization: `Bearer ${await getToken()}`,
                  },
                })
                .catch((error) => {
                  if (error && error.response) {
                    console.log("Error: ", error);
                  }
                });

              if (response && response.data) {
                setSuccess(response.data.message);
              }

              console.log(response);
            }}
          >
            {({
              isSubmitting,
              getFieldProps,
              handleChange,
              handleBlur,
              values,
              errors,
              touched,
            }) => (
              <Form className='p-3 text-black'>
                <div className='flex items-center justify-center text-green-600'>
                  <span>{success}</span>
                </div>
                <label className='pl-1' htmlFor='Patient'>
                  Patient :
                </label>
                <Field
                  component='select'
                  id='patient'
                  name='patient'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  multiple={false}
                  className='px-4 ml-4 border-2 border-solid border-gray-300 rounded-sm'
                >
                  {patientsList.map((patient) => (
                    <option key={patient.label} value={patient.value}>
                      {patient.value}
                    </option>
                  ))}
                </Field>
                {errors.patient && touched.patient ? (
                  <div className='text-red-700'>{errors.patient}</div>
                ) : null}
                <div className='pt-1'>
                  <label className='pl-1 pt-2' htmlFor='date'>
                    Date
                  </label>
                  <div className='w-full p-1 border-2 py-1 border-solid border-gray-200'>
                    <input
                      type='date'
                      name='date'
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.date && touched.date ? (
                      <div className='text-red-700'>{errors.date}</div>
                    ) : null}
                  </div>
                </div>
                <div className='flex items-center pt-2 justify-between'>
                  <div className='flex flex-col'>
                    <label className='pl-1' htmlFor='startTime'>
                      Start Time
                    </label>
                    <input
                      className='flex flex-reverse border-2 py-1 px-8 border-solid border-gray-200'
                      type='time'
                      name='startTime'
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.startTime && touched.startTime ? (
                      <div className='text-red-700'>{errors.startTime}</div>
                    ) : null}
                  </div>
                  <div className='flex flex-col'>
                    <label className='pl-1' htmlFor='endTime'>
                      End Time
                    </label>
                    <input
                      className='flex flex-reverse py-1 border-2 px-8 border-solid border-gray-200'
                      type='time'
                      name='endTime'
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.endTime && touched.endTime ? (
                      <div className='text-red-700'>{errors.endTime}</div>
                    ) : null}
                  </div>
                </div>

                <div className='pt-1'>
                  <label className='pl-1 ' htmlFor='notes'>
                    Notes
                  </label>
                  <input
                    type='textarea'
                    name='notes'
                    className='w-full break-words h-[100px] border-2 border-solid border-gray-200'
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.notes && touched.notes ? (
                    <div className='text-red-700'>{errors.notes}</div>
                  ) : null}
                </div>

                <div className='pt-3  flex items-center'>
                  <label className='pl-1 ' htmlFor='chargeDentist'>
                    Dentist In-charge :
                  </label>

                  <Field
                    component='select'
                    id='chargeDentist'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='chargeDentist'
                    multiple={false}
                    className='px-4 ml-4 border-2 border-solid border-gray-300 rounded-sm'
                  >
                    {dentistChargeList.map((charge) => (
                      <option key={charge.label} value={charge.value}>
                        {charge.value}
                      </option>
                    ))}
                  </Field>
                  {errors.chargeDentist && touched.chargeDentist ? (
                    <div className='text-red-700'>{errors.chargeDentist}</div>
                  ) : null}
                </div>

                <div className='w-full pt-6 flex items-center justify-center'>
                  <button
                    type='submit'
                    className='flex items-center px-4 py-2 border-md  bg-red-400'
                  >
                    <IoIosSave />
                    Save Appointment
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
